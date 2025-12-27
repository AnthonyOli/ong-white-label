import { IsNumber, IsOptional } from "class-validator";
import CreateOngDto from "./create-ong.dto";

export default class UpdateOngDto extends CreateOngDto {
    @IsOptional()
    @IsNumber()
    logoPhotoId?: number
}