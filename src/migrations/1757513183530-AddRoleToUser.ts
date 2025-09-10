import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoleToUser1757513183530 implements MigrationInterface {
    name = 'AddRoleToUser1757513183530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'user'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
    }

}
