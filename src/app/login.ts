export interface Login {
	error : string;
	token : string;
	last_login: number;
	last_visit: string;
	suggestions : Array<string>;
}
