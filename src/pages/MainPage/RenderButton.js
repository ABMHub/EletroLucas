import React from "react"
import Button from "../../components/Button/button.js";

export default function RenderButton(devices, navigation) {
    let render_list = []

    if (devices.length == 0)
    {
      render_list.push(
        <Button
          key={0}
          onPress={() => navigation.navigate('Test')}
          title="Go to notifications"
          id={-1}
        />
      )
    }

    for (var i = 0; i < devices.length; i++)
    {
      render_list.push(
        <Button
          key={i}
          onPress={() => navigation.navigate('Test')}
          title="Go to notifications"
          id={devices[i].id_icon}
        />
      )
    }
    
    return render_list
  }