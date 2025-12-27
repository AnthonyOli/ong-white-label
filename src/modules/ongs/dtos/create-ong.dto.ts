import { Transform } from "class-transformer";
import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";

export default class CreateOngDto {

    @IsString({
        message: "Nome da ONG deve conter apenas letras."
    })
    @IsNotEmpty({
        message: "Nome não pode ser vazio."
    })
    name: string;

    @IsString({
        message: "Slug deve ser uma string"
    })
    @IsNotEmpty({
        message: "Slug não pode ser vazio."
    })
    slugName: string;

    @IsString({ message: "Nome Social deve conter apenas letras e números." })
    @IsNotEmpty({
        message: "Nome Social não pode ser vazio."
    })
    socialName: string;

    @IsString({
        message: "CNPJ deve ser uma string."
    })
    @Transform(({ value }) => String(value).replaceAll(/ˆ[.-/]/g, ''))
    @Length(14)
    @IsNotEmpty({
        message: "CNPJ não pode ser vazio."
    })
    cnpj: string;

    @IsString({
        message: "Chave PIX deve ser uma string."
    })
    @IsOptional()
    pixKey?: string;
}