import React from "react"
import Button from "../../components/Button/button.js";

function navigationWrapper(id, navigation) {
  return () => navigation.navigate('LampConfig', {"id":id})
}

export default function RenderButton(devices, navigation) {
    let render_list = []

    for (var i = 0; i < devices.length; i++)
    {
      //console.log(getName(devices, i))
      render_list.push(
        <Button
          key={i}
          onPress={navigationWrapper(devices[i].id, navigation)}
          title={devices[i].Apelido == "" ? devices[i]["Nome do dispositivo"] : devices[i].Apelido}
          id={devices[i].idIcon}
        />
      )
    }

    render_list.push(
      <Button
        key={-1}
        onPress={() => navigation.navigate('RegisterDevice')}
        title="Adicionar Dispositivo"
        id={-1}
      />
    )
    
    return render_list
  }