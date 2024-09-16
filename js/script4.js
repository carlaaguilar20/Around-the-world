class usuario {
    constructor(nombre, username, password,avatar){
        this.nombre= nombre;
        this.username= username;
        this.password= password;
        this.avatar= avatar;
    }
    validarCredenciales(username,password){
    return this.username=== username && this.password=== password;
    }
}

