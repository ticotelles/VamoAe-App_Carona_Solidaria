import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'#F3F4F6',
      
    },
    cardRide: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 12,
          marginTop: 10,
        marginBottom: 10,
 
    },
    wrapperNamePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    origemDestinoIcon: {
        width: 20,
        height: 55,
        marginRight: 10
    },
    wrapperOrigemDestino: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    buttonContact: {
        alignItems: 'center',
        backgroundColor: '#EA9C36',
        paddingVertical: 12,
        paddingHorizontal: 12,
        // width: '65%',
        borderRadius: 6,
        // marginTop: 12,

    },
    timeTextCard: {
        fontWeight: 500,
        fontSize: 16,
    },
    priceTextCard: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EA9C36',
    },
    contactTextCard: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#9CA3AF'
    },
    nameTextCard: {
        fontWeight: 500,
        fontSize: 16,
    },
    originTextCard:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    dateTextCard:{
        fontSize: 16,
        fontWeight:500
    },
    wrapperPrice:{
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 5,
        paddingRight:10,
        // backgroundColor: '#F0FDF4',
        borderRadius: 12,
    },
    textStatusOffer:{
        color:'#16a34a',
        padding: 6,
        backgroundColor:'#dcfce7',
        borderRadius:12
    },
    textStatusRequest:{
        color:'#16a34a',
        padding: 6,
        backgroundColor:'#dcfce7',
        borderRadius:12
    }
});

export default styles;