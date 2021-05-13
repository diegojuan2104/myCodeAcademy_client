import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT
} from "./types/index"


//Login 
export function loginAction(producto) {
    return async (dispatch) => {
        dispatch(
            login()
        );
        try {
            //Insertar en la base de datos 
            const res = await axiosClient.post("/api/auth/", user);

            console.log(res);


            dispatch(loginSuccess(res));

            //Alerta
            Swal.fire(
                "Correcto",
                "El producto se agregó correctamente",
                "success"
            )

        } catch (error) {
            console.log(error);
            dispatch(loginError(true));

            Swal.fire(
                {
                    icon: "error",
                    title: "There was an error",
                    text: "error"
                }
            )
        }
    }
}


const login = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const loginSuccess = (producto) => (
    {
        type: LOGIN_SUCCESS,
        payload: producto
    }
)

const loginError = (estado) => (
    {
        type: LOGIN_ERROR,
        payload: estado
    }
)




import axiosClient from "../config/axios";