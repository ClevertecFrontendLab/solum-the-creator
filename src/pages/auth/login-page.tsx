import { FormInput } from '~/components/shared/inputs/form-input/form-input';

export const LoginPage = () => (
    <div>
        <h1>login page</h1>
        <FormInput
            label='Логин для входа на сайт'
            type='password'
            helperText='Введите пароль'
            placeholder='Пароль'
            showPasswordToggle={true}
        />
    </div>
);
