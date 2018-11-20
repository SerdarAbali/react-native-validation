import React, {Component} from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView, Image} from 'react-native'
import LoginForm from './loginForm'

export default class Login extends Component {
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                <Image style={styles.logo} source={BackImage}/>
                <Text style={styles.title}>Vehicle trade made possible for pocket device...</Text>
                </View>
                <View style={styles.formContainer}>
                <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#dfe6e9',
    },
    keyboardAvoidIOS:{
        backgroundColor: '#dfe6e9',
        flex:1,
    },
    logoContainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center'
    },
    formContainer:{

    },
    logo:{
        height:100,
        width:100
    },
    title:{
        color:'#6e6e6e',
        fontFamily:'RobotoCondensed-Regular',
        fontSize:16,
        marginTop:10,
        width:180,
        textAlign:'center',
        opacity:0.8

    }
})

// class Login extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             logoAnimation:false
//         }
//     }

//     showLogin = () => {
//         this.setState ({
//             logoAnimation:true
//         })
//     }

//     render (){
//         return(
            
//             <ScrollView>
//                 <View style={styles.container}>
//                     <Logo
//                     showLogin={this.showLogin}/>
//                     <LoginPanel
//                     show={this.state.logoAnimation}/>
//                 </View>
//             </ScrollView>
//         )
//     }
// }

// const styles = StyleSheet.create ({
//     container:{
//         flex:1,
//         backgroundColor:'#ecf0f1',
//         alignItems: 'center',
//     }
// })

// export default Login

