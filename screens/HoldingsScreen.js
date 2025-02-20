import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fetchHoldings } from '../utils/fetchHoldings';
import HoldingItem from '../components/HoldingItem';
import { commonStyles } from '../styles/commonStyles';

const HoldingsScreen = () => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      try {
        const data = await fetchHoldings();
        if (isMounted) {
          setHoldings(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching holdings:', error);
      }
    };
    loadData();
    return () => { isMounted = false; };
  }, []);

  
  const currentValueTotal = holdings.reduce(
    (acc, stock) => acc + (stock.ltp * stock.quantity),
    0
  );
  const totalInvestment = holdings.reduce(
    (acc, stock) => acc + (stock.avgPrice * stock.quantity),
    0
  );
  const totalPNL = currentValueTotal - totalInvestment;
  const todaysPL = holdings.reduce(
    (acc, stock) => acc + ((stock.close - stock.ltp) * stock.quantity),
    0
  );

  const toggleModal = () => setModalVisible(prev => !prev);

 
  const onGestureStateChange = (event) => {
    if (event.nativeEvent.translationY < -30) {
      toggleModal();
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={commonStyles.container}>
        <ActivityIndicator size="large" color="purple" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={commonStyles.container}>
     
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerText}>My Holdings</Text>
      </View>

      
      <ScrollView contentContainerStyle={commonStyles.listContainer}>
        {holdings.map((item) => (
          <HoldingItem key={item.symbol} {...item} />
        ))}
      </ScrollView>

      
      <PanGestureHandler onHandlerStateChange={onGestureStateChange}>
        <TouchableOpacity onPress={toggleModal}>
          <View style={commonStyles.footer}>
            <Text style={commonStyles.footerText}>
              Total P&L: ₹{totalPNL.toFixed(2)}
            </Text>
          </View>
        </TouchableOpacity>
      </PanGestureHandler>

      
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        swipeDirection="down"
        style={[commonStyles.modal, { marginBottom: insets.bottom + 70 }]}
        backdropOpacity={0}
        coverScreen={false}
      >
        <View style={commonStyles.bottomSheet} pointerEvents="auto">
          <View style={commonStyles.sheetRow}>
            <Text style={commonStyles.sheetLabel}>Current Value:</Text>
            <Text style={commonStyles.sheetValue}>₹{currentValueTotal.toFixed(2)}</Text>
          </View>
          <View style={commonStyles.sheetRow}>
            <Text style={commonStyles.sheetLabel}>Total Investment:</Text>
            <Text style={commonStyles.sheetValue}>₹{totalInvestment.toFixed(2)}</Text>
          </View>
          <View style={commonStyles.sheetRow}>
            <Text style={commonStyles.sheetLabel}>Today's P&L:</Text>
            <Text style={[commonStyles.sheetValue, { color: 'red' }]}>₹{todaysPL.toFixed(2)}</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HoldingsScreen;
