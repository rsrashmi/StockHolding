import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../styles/commonStyles';

const HoldingItem = ({ symbol, quantity, ltp, avgPrice, close }) => {

  const pnl = (ltp - avgPrice) * quantity;
  const totalValue = ltp * quantity;
  const arrowSymbol = '↑';

  return (
    <View style={commonStyles.itemContainer}>

      <View style={commonStyles.itemRow}>
        <Text style={commonStyles.itemSymbol}>{symbol}</Text>
        <Text style={commonStyles.itemSymbol}>₹ {close}</Text>
      </View>

      <View style={commonStyles.itemRow}>
        <Text style={commonStyles.itemSubSymbol}>{symbol}</Text>
        <Text style={commonStyles.itemSubSymbol}>Qty: {quantity}</Text>
      </View>

      <View style={commonStyles.itemRow}>
        <Text style={commonStyles.itemTotalValueLabel}>
          Total Value: ₹ {totalValue.toFixed(2)}
        </Text>
        <View style={commonStyles.itemPnlContainer}>
          <View
            style={[
              commonStyles.itemArrowContainer,
              pnl >= 0 ? commonStyles.profitArrowContainer : commonStyles.lossArrowContainer,
            ]}
          >
            <Text
              style={[
                commonStyles.itemArrowText,
                pnl >= 0 ? commonStyles.profitArrowText : commonStyles.lossArrowText,
              ]}
            >
              {arrowSymbol}
            </Text>
          </View>
          <Text style={[
              commonStyles.itemTotalValueText,
              pnl >= 0 ? commonStyles.profit : commonStyles.loss,
            ]}>
            {Math.abs(pnl).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HoldingItem;
