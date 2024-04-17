import React, { useState } from 'react';
import { 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../helpers/constants';

const SetupStation = () => {
  const [station, setStation] = useState('');
  const [areaStation, setAreaStation] = useState('');
  const [direction, setDirection] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);
  const [isChecked, setIsChecked] = useState(false);


  const getBorderStyle = (inputName) => ({
    borderColor: focusedInput === inputName ? '#00CD5E' : '#ECECEC',
  });

  const handleSetup = async () => {
    // Code pour gérer la soumission des données
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={require('../../../assets/mic/vertical.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>إعداد المحطات</Text>
        <TextInput
          placeholder="إسم المحطة"
          style={[styles.input, getBorderStyle('station')]}
          onChangeText={setStation}
          value={station}
          onFocus={() => setFocusedInput('station')}
          onBlur={() => setFocusedInput(null)}
        />

        <TextInput
          placeholder="موقع المحطة"
          style={[styles.input, getBorderStyle('areaStation')]}
          onChangeText={setAreaStation}
          value={areaStation}
          onFocus={() => setFocusedInput('areaStation')}
          onBlur={() => setFocusedInput(null)}
        />


  
<View style={styles.inputWithIcon}>
  <TextInput
    placeholder="الوجهات"
    style={[getBorderStyle('direction'),fontFamily='Cairo700']}
    onChangeText={setDirection}
    value={direction}         
    
  />
  <TouchableOpacity
    style={styles.plusIcon}
    onPress={() => {/* handle the press event */}}
  >
    <FontAwesome name="plus-circle" size={32} color="#2e2e2e" />
  </TouchableOpacity>
</View>



  
<View style={styles.buttonGroup}>
  <TouchableOpacity style={[styles.smallButton, styles.rightButton]}>
    <Text style={styles.minusText}>-</Text>
    <Text style={styles.smallButtonText}>زيادة</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.smallButton}>
    <Text style={styles.minusText}>-</Text>
    <Text style={styles.smallButtonText}>حذف</Text>
  </TouchableOpacity>
  <TouchableOpacity style={[styles.smallButton, styles.leftButton]}>
    <Text style={styles.minusText}>-</Text>
    <Text style={styles.smallButtonText}>تعديل</Text>
  </TouchableOpacity>
</View>

<TouchableOpacity 
  style={styles.footerContainer} 
  onPress={() => setIsChecked(!isChecked)}
>
  <View style={styles.checkbox}>
    {isChecked && <Text style={styles.checkboxChecked}>✓</Text>}
  </View>
  {/* The space in the string ' على ' ensures padding on both sides */}
  <Text style={styles.footerText}>
    أنا موافق على{" "}
    <Text style={styles.highlightedText}>شروط الخدمة</Text> و

    <Text style={styles.highlightedText}>سياسة الخصوصية</Text>.
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={handleSetup}
  style={styles.setupButton}
>
  <Text style={styles.buttonText}>المتابعه</Text>
</TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 350,
    height: 180,
    resizeMode: 'contain',
    marginTop: 70,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Cairo700',
    color: '#00CD5E',
    paddingBottom:10,
    
  },
  paragraph: {
    color: '#000',
    fontSize: 14,
    marginHorizontal: 20,
    textAlign: 'center',
    marginBottom: 30,
  },


  specialText: {
    fontSize: 15,
    fontFamily: 'Cairo700',
    marginRight: -10, // Ajouter une marge à droite négative
  },
  
  
  setupButton: {
    backgroundColor: '#00CD5E',
    paddingVertical: 10,
    width: '80%',
    height: '8%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Cairo700',
  },


  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginLeft:26,
  },
  smallButton: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginHorizontal:3 ,
    height:27,
    width:90,
    flexDirection: 'row', // Allows text and minus sign to be in a row
    alignItems: 'center', // Centers the items vertically
    justifyContent: 'space-between', // Spaces the items within the button
    paddingHorizontal: 18,
    marginTop:-5,
    paddingTop:11,
    
  },
  minusText: {
    fontSize: 25, // Adjust the size as needed
    fontFamily: 'Cairo700',
    color: '#2e2e2e', // Adjust color as needed
    // ... any other styling you want for the minus text
    marginTop:-13,
  },
  smallButtonText: {
    color: '#2e2e2e',
    fontSize: 15,
    textAlign:'right',
    marginTop:-7,
    marginRight:-10,

  },
  footerContainer: {
    flexDirection: 'row-reverse', // Inversez l'ordre des éléments enfants
    alignItems: 'center',
    marginTop: 40,
    marginRight:20,
    
    // Ajoutez d'autres styles si nécessaire pour le placement
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5, // Ajoutez des bordures arrondies
    borderColor: '#000',
    backgroundColor: '#edf2fc', // Fond blanc ou toute autre couleur de fond
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  checkboxChecked: {
    fontSize: 18,
    color: '#00CD5E', // Ici, utilisez la couleur de votre choix pour la coche
  },
  footerText: {
    fontSize: 15, // Définissez la taille du texte comme vous le souhaitez
    color: '#2e2e2e', // Couleur du texte
    // Vous pouvez ajouter des styles de texte supplémentaires ici
  },

  highlightedText:{
    color:'#00cd5d',
    fontFamily: 'Cairo700',
  },

  inputWithIcon: {
    width: '87%',
    alignItems: 'right',
    position: 'relative',
    borderRadius: 15,
    marginVertical: 8,
    backgroundColor: '#F5F9FE',
    height:'8%',
    padding:15,
    fontSize: 18,


  },
  input: {
    width: '87%',
    padding: 15,
    marginVertical: 7,
    borderRadius: 15,
    backgroundColor: '#F5F9FE',
    fontSize: 16,
    textAlign: 'right',
    height:'8%',
    borderColor: '#00CD5E',
    fontFamily: 'Cairo500',

  },

  plusIcon: {
    position: 'absolute',
    left: 10,
    height: '141%',
    marginLeft:15,
    marginTop:9.5,
  },
});

export default SetupStation;
