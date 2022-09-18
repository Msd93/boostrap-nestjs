import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

export class UserEntity implements User  {
    @ApiProperty()
    id: number;
    @ApiProperty({ required: false, nullable: false })
    email: string;
    @ApiProperty({ required: false, nullable: false })
    name: string;
}
