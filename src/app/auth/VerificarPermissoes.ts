export class VerificarPermissoes {

    public static temPermissao(roles: String[], rolesDoUsuario: String[]): boolean{
        for(let role of roles){
            if(rolesDoUsuario.includes(role)){
                return true;
            }
        }

        return false;
    }
}