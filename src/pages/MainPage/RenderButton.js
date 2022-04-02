import React from "react"
import Button from "../../components/Button/button.js";

export default function RenderButton(devices, navigation) {
    //let {devices, navigation} = props
    
    let render_list = []

    for (var i = 0; i < devices.length; i++)
    {
      render_list.push(
        <Button
          onPress={() => navigation.navigate('Test')}
          title="Go to notifications"
          id={1}
        />
      )
    }
    
    return render_list
  }