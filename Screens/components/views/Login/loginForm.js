import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity,} from 'react-native'
import {ValidationRules} from '../../utils/forms/validationRules'

export default class LoginForm extends Component {
    state = {
        hasErrors:false,
        form:{
            email:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    isRequired:true,
                    isEmail:true
                }
            },
            password:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    isRequired:true,
                    minLength:8
                }
            },
            // confirmPassword:{
            //     value:"",
            //     valid:false,
            //     type:"textinput",
            //     rules:{
            //         isRequired:true,
            //         confirmPass:"password"
            //     }
            // }
        }
    }

    updateInput =(name,value) => {
        this.setState({
            hasErrors:false
        })

        let formCopy = this.state.form
        formCopy[name].value = value

        let rules = formCopy[name].rules
        let valid = ValidationRules(value, rules, formCopy)
        console.log(valid)
        

        formCopy[name].valid = valid

        this.setState({
            form: formCopy
        })
    }
    
    render(){
        return (
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                type={this.state.form.email.type}
                value={this.state.form.email.value}
                onChangeText={value => this.updateInput("email",value) }
                autoCapitalize={"none"}
                keyboardType={"email-address"}
                returnKeyType="next"
                onSubmitEditing={()=>this.passwordInput.focus()} // hyppää salasana kenttälle kun painaa "seuraava" näppiä
            />

            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                type={this.state.form.password.type}
                value={this.state.form.password.value}
                onChangeText={value =>this.updateInput("password",value)}
                secureTextEntry
                returnKeyType="go"
                ref={(input) => this.passwordInput = input} // seuraava hypyn vastaanotto
                //onEndEditing ={}
            />
            <View style={styles.sideByside}>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=> alert('login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=> alert('register')}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        marginBottom: 5
    },
    input:{
        height: 40,
        backgroundColor: '#b2bec3', //#b2bec3
        marginBottom: 20,
        color:'#6e6e6e',
        paddingHorizontal: 10,
        fontFamily:'RobotoCondensed-Regular'
    },
    sideByside:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    buttonContainer:{
        //flex:1,
        backgroundColor:'#6e6e6e',
        paddingVertical: 10,
        width:"49%",
        height: 40
    },
    buttonText:{
        textAlign: 'center',
        color:'#fff',
        opacity:0.8,
        fontFamily:'RobotoCondensed-Regular'
    }
})

