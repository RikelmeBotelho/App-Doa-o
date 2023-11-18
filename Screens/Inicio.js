import React from 'react';
import { View, Text, TextInput, TouchableOpacity, onImagePress, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Style/Inicio';

export default function Inicio() {
    const navigation = useNavigation();

    const Visitante = () => {
      navigation.navigate('Inicio');
    };

    return (
        <View style={styles.full}>
            <ScrollView>
          <View style={styles.headerContainer}>
            <Image 
              source={{ uri: 'https://files.oaiusercontent.com/file-BqlhDOAQHOcDK2Bz0ZXmpvVG?se=2023-11-18T15%3A59%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddc67e409-f517-42bc-b20a-165611082b47.webp&sig=kIf6XCDgDhm34wsxfEb8dgz/UouzInlQKRcSPR6HU6s%3D' }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <TouchableOpacity onPress={() => console.log('Entrar clicado')}>
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>entrar</Text>
                
              </View>
            </TouchableOpacity>
          </View>
          
          
      
          <View style={styles.container}>
            <TouchableOpacity onPress={onImagePress}>
              <Image style={styles.img}
                source={{ uri: 'https://files.oaiusercontent.com/file-zdcxvbuXkZdNSZHHGLAofqnB?se=2023-11-18T17%3A12%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dae2be7c3-6a28-4152-87d4-c14cbbd4bd6f.webp&sig=mZ0M8%2B3/MlJvDsRiYRxtR4emm7LD9j2JETvfzxuRuoU%3D' }}
              />
              <Text style={styles.texto}>  Hospitais  Proximos </Text>
              
            </TouchableOpacity>
            <TouchableOpacity onPress={onImagePress}>
              <Image style={styles.img}
                source={{ uri: 'https://us.123rf.com/450wm/jemastock/jemastock1904/jemastock190426141/121063247-rel%C3%B3gio-alarme-s%C3%ADmbolo-cartoon-vector-ilustra%C3%A7%C3%A3o-design-gr%C3%A1fico.jpg' }}
              />
              <Text style={styles.texto}> Agende sua doação </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity onPress={onImagePress}>
              <Image style={styles.img}
                source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/20098345-icone-de-calendario-em-estilo-comico-agenda-cartoon-ilustracaoial-sobre-fundo-branco-isolado-conceito-do-negocio-do-efeito-do-respingo-do-planejador-da-programacao-vetor.jpg' }}
              />
              <Text style={styles.texto}>  Histórico de Doação </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onImagePress}>
              <Image style={styles.img}
                source={{ uri: 'https://img.freepik.com/vetores-gratis/ponto-de-interrogacao-no-circulo-de-estilo-cartoon_78370-1434.jpg' }}
              />
              <Text style={styles.texto}>Perguntas Frequentes </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity onPress={onImagePress}>
              <Image style={styles.img}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4312/4312094.png' }}
              />
              <Text style={styles.texto}>           Meu Perfil </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onImagePress}>
              <Image style={styles.img}
                source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/20097070-icone-do-cartao-de-identificacao-de-mulheres-em-estilo-comico-identidade-tag-cartoon-ilustracao-em-sobre-fundo-branco-isolado-conceito-de-negocio-de-efeito-de-respingo-de-carteira-de-motorista-vetor.jpg' }}
              />
              <Text style={styles.texto}>   Cartão do Doador </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity onPress={onImagePress}>
              <Image style={styles.img}
                source={{ uri: 'https://as2.ftcdn.net/v2/jpg/01/43/86/73/1000_F_143867315_q0TSlqsULGEr55k2HkhwPV5nuMB9UcSA.jpg' }}
              />
              <Text style={styles.texto}>        Fale conosco </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onImagePress}>
              <Image style={styles.img}
                source={{ uri: 'https://media.istockphoto.com/id/1179725759/pt/vetorial/vector-cartoon-gear-icon-in-comic-style-cog-wheel-concept-illustration-pictogram-gearwheel.jpg?s=170667a&w=0&k=20&c=C2YgZPQd1ubNRU1dKfx-TygVEjhsdXF7Rk3q18HnzBc=' }}
              />
              <Text style={styles.texto}> Configurações </Text>
            </TouchableOpacity>
          </View>
    
         
          </ScrollView>
    
        </View>
  );
}


