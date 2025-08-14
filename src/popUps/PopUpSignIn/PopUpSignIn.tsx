import { Overlay } from "../../ui/Overlay.styled";
import {AuthWrapper, Logo, FormFields,InputItem} from "../../ui/Form.styled";

import { Button
 } from "../../ui/Button.styled";



function PopUpSignIn() {
return(
<Overlay>

     <AuthWrapper>
          <Logo src="./logo.svg" alt="Logo" />
      <form >
            <FormFields>
              <InputItem name="email" type="email" placeholder="Эл. почта" />
              <InputItem name="password" type="password" placeholder="Пароль" />
             
            </FormFields>
                  <Button type="submit">Войти</Button>
            <Button type="button">Зарегистрироваться</Button>
      
  </form>
        </AuthWrapper>
</Overlay>
)
  };


  export default PopUpSignIn