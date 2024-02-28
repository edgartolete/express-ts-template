import { Entity, BaseEntity, Column, PrimaryColumn, Index, OneToMany } from 'typeorm';
import { Group } from './groupsEntity';
import { User } from './usersEntity';
import { Role } from './rolesEntity';

@Entity('apps')
export class App extends BaseEntity {
	@PrimaryColumn({ type: 'char', length: 12 })
	@Index()
	code: string;

	@Column({
		nullable: false
	})
	name: string;

	@Column({ type: 'text' })
	description: string;

	@Column()
	apiKey: string;

	@Column()
	accessTokenSecret: string;

	@Column()
	refreshTokenSecret: string;

	@OneToMany(() => User, user => user.app)
	users: User[];

	@OneToMany(() => Group, group => group.app)
	groups: Group[];

	@OneToMany(() => Role, role => role.app)
	roles: Role[];
}