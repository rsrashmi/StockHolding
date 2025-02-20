import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  header: { 
    backgroundColor: 'purple', 
    padding: 15, 
    alignItems: 'flex-start' 
  },
  headerText: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  listContainer: { 
    flexGrow: 1, 
    paddingVertical: 10 
  },
  footer: {
    padding: 15,
    backgroundColor: '#e0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 70,
  },
  footerText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: 'green' 
  },
  
  modal: { 
    justifyContent: 'flex-end', 
    margin: 0 
  },
  bottomSheet: { 
    backgroundColor: '#F0F0F0',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 10 
  },
  sheetLabel: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#000' 
  },
  sheetValue: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#000' 
  },
  itemContainer: { 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderBottomWidth: 1, 
    borderColor: '#ccc' 
  },
  itemRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 2 
  },
  itemSymbol: { 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  itemSubSymbol: { 
    fontSize: 14, 
    color: 'grey' 
  },
  itemTotalValueLabel: { 
    fontSize: 14, 
    fontWeight: '600' 
  },
  itemTotalValueText: { 
    fontSize: 14, 
    fontWeight: '600' 
  },
  itemPnlContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  itemArrowContainer: { 
    marginRight: 4 
  },
  itemArrowText: { 
    fontSize: 16 
  },
  profitArrowContainer: { 
    transform: [{ rotate: '45deg' }] 
  },
  lossArrowContainer: { 
    transform: [{ rotate: '135deg' }] 
  },
  profitArrowText: { 
    color: 'green' 
  },
  lossArrowText: { 
    color: 'red' 
  },
  profit: { 
    color: 'green' 
  },
  loss: { 
    color: 'red' 
  },
});
