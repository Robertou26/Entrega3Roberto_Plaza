
export interface IAlumnos{
    id:Number;
    nombre:String;
    tipoPersona: String;
    rut: String;
}

export interface IAlumno{
    nombre:String;
    tipoPersona: String;
    rut: String;
}

export interface Usuarios{
    id:number;
    username: String;
    password: String;
    role: String;
    isactive:boolean;
}
export interface Usuario{
    username: String;
    password: String;
    role: String;
    isactive:boolean;
}
export interface Palabra{
    username: String;
    texto: String;
}
export interface Palabras{
    id:number;
    username: String;
    texto:String;
}
export interface Usuarioalumnos{
    id:number;
    username: String;
    password: String;
    correo: String;
    isactive:boolean;
}
export interface Usuarioalumno{
    username: String;
    password: String;
    correo: String;
    isactive:boolean;
}