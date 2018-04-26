import { Component } from '@angular/core';
import { GtConfig, GtRow } from '@angular-generic-table/core';

export interface RowData extends GtRow {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	ip_address: string;
	company: string;
	country: string;
	favorite_color: string;
	job_title: string;
	phone: string;
	username: string;
	time_zone: string;
	profile_img: string;
	birthday: string;
}

@Component({
	selector: 'change-column-settings',
	templateUrl: './change-column-settings.component.html'
})
export class ChangeColumnSettingsComponent {
	public firstConfigObject: GtConfig<RowData>;
	public secondConfigObject: GtConfig<RowData>;
	public data: Array<RowData>;

	public getBaseSettings() {
		return [
			{
				objectKey: 'id',
				sort: 'asc'
			},
			{
				objectKey: 'first_name'
			},
			{
				objectKey: 'favorite_color',
				visible: false
			},
			{
				objectKey: 'last_name',
				visible: false
			},
			{
				objectKey: 'email',
				visible: false
			},
			{
				objectKey: 'gender',
				visible: false
			},
			{
				objectKey: 'ip_address',
				visible: false
			},
			{
				objectKey: 'company',
				visible: false
			},
			{
				objectKey: 'country',
				visible: false
			},
			{
				objectKey: 'job_title',
				visible: false
			},
			{
				objectKey: 'phone',
				visible: false
			},
			{
				objectKey: 'username',
				visible: false
			},
			{
				objectKey: 'time_zone',
				visible: false
			},
			{
				objectKey: 'profile_img',
				visible: false
			},
			{
				objectKey: 'birthday'
			}
		];
	}

	public getBaseFields() {
		return [
			{
				name: 'Id',
				objectKey: 'id'
			},
			{
				name: 'Name',
				objectKey: 'first_name'
			},
			{
				name: 'Lucky number',
				objectKey: 'favorite_color'
			},
			{
				objectKey: 'last_name',
				name: 'Last name'
			},
			{
				objectKey: 'email',
				name: 'Email'
			},
			{
				objectKey: 'gender',
				name: 'Gender'
			},
			{
				objectKey: 'ip_address',
				name: 'Ip address'
			},
			{
				objectKey: 'company',
				name: 'Company'
			},
			{
				objectKey: 'country',
				name: 'Country'
			},
			{
				objectKey: 'job_title',
				name: 'Job title'
			},
			{
				objectKey: 'phone',
				name: 'Phone'
			},
			{
				objectKey: 'username',
				name: 'Username'
			},
			{
				objectKey: 'time_zone',
				name: 'Time zone'
			},
			{
				objectKey: 'profile_img',
				name: 'Profile img'
			},
			{
				objectKey: 'birthday',
				name: 'Birthday'
			}
		];
	}

	constructor() {
		const data = [
			{
				id: 1,
				first_name: 'Ashley',
				last_name: 'Hansen',
				email: 'ahansen0@sourceforge.net',
				gender: 'Female',
				ip_address: '42.196.237.110',
				company: 'Flipbug',
				country: 'Serbia',
				favorite_color: '#d759f6',
				job_title: 'Legal Assistant',
				phone: '381-(690)132-2252',
				username: 'ahansen0',
				time_zone: 'Europe/Belgrade',
				profile_img: 'http://dummyimage.com/242x179.png/dddddd/000000',
				birthday: '1955-06-10'
			},
			{
				id: 2,
				first_name: 'Lillian',
				last_name: 'Chavez',
				email: 'lchavez1@fda.gov',
				gender: 'Female',
				ip_address: '249.252.103.90',
				company: 'Ainyx',
				country: 'United States',
				favorite_color: '#1db85c',
				job_title: 'Engineer II',
				phone: '1-(763)807-2351',
				username: 'lchavez1',
				time_zone: 'America/Chicago',
				profile_img: 'http://dummyimage.com/108x153.jpg/5fa2dd/ffffff',
				birthday: '2006-08-27'
			},
			{
				id: 3,
				first_name: 'Cynthia',
				last_name: 'Stanley',
				email: 'cstanley2@engadget.com',
				gender: 'Female',
				ip_address: '129.246.83.246',
				company: 'Centimia',
				country: 'Indonesia',
				favorite_color: '#f59430',
				job_title: 'Developer IV',
				phone: '62-(734)705-4841',
				username: 'cstanley2',
				time_zone: 'Asia/Jakarta',
				profile_img: 'http://dummyimage.com/117x160.bmp/ff4444/ffffff',
				birthday: '1986-11-04'
			},
			{
				id: 4,
				first_name: 'Andrea',
				last_name: 'Fisher',
				email: 'afisher3@dion.ne.jp',
				gender: 'Female',
				ip_address: '116.22.133.176',
				company: 'Wikizz',
				country: 'Norway',
				favorite_color: '#953de7',
				job_title: 'Computer Systems Analyst III',
				phone: '47-(288)254-2574',
				username: 'afisher3',
				time_zone: 'Europe/Oslo',
				profile_img: 'http://dummyimage.com/107x151.jpg/5fa2dd/ffffff',
				birthday: '1999-06-16'
			},
			{
				id: 5,
				first_name: 'Russell',
				last_name: 'Sanders',
				email: 'rsanders4@dmoz.org',
				gender: 'Male',
				ip_address: '213.4.47.227',
				company: 'Youspan',
				country: 'China',
				favorite_color: '#299b7f',
				job_title: 'Desktop Support Technician',
				phone: '86-(811)544-1191',
				username: 'rsanders4',
				time_zone: 'Asia/Chongqing',
				profile_img: 'http://dummyimage.com/159x211.png/ff4444/ffffff',
				birthday: '1994-01-25'
			},
			{
				id: 6,
				first_name: 'Willie',
				last_name: 'Morris',
				email: 'wmorris5@huffingtonpost.com',
				gender: 'Male',
				ip_address: '237.255.190.122',
				company: 'Eidel',
				country: 'China',
				favorite_color: '#962f03',
				job_title: 'Marketing Manager',
				phone: '86-(583)894-9258',
				username: 'wmorris5',
				time_zone: 'Asia/Chongqing',
				profile_img: 'http://dummyimage.com/115x126.png/5fa2dd/ffffff',
				birthday: '1998-09-21'
			},
			{
				id: 7,
				first_name: 'Christine',
				last_name: 'Hanson',
				email: 'chanson6@reddit.com',
				gender: 'Female',
				ip_address: '232.250.153.126',
				company: 'Twimm',
				country: 'United States',
				favorite_color: '#0987a6',
				job_title: 'Legal Assistant',
				phone: '1-(414)281-7119',
				username: 'chanson6',
				time_zone: 'America/Chicago',
				profile_img: 'http://dummyimage.com/188x237.png/dddddd/000000',
				birthday: '1986-10-01'
			},
			{
				id: 8,
				first_name: 'William',
				last_name: 'Kelly',
				email: 'wkelly7@geocities.com',
				gender: 'Male',
				ip_address: '64.103.175.253',
				company: 'Leenti',
				country: 'Poland',
				favorite_color: '#b654b6',
				job_title: 'Director of Sales',
				phone: '48-(971)291-9791',
				username: 'wkelly7',
				time_zone: 'Europe/Warsaw',
				profile_img: 'http://dummyimage.com/247x134.bmp/ff4444/ffffff',
				birthday: '1987-05-03'
			},
			{
				id: 9,
				first_name: 'Adam',
				last_name: 'Hayes',
				email: 'ahayes8@nps.gov',
				gender: 'Male',
				ip_address: '247.136.87.110',
				company: 'Dynava',
				country: 'Bulgaria',
				favorite_color: '#2cef3b',
				job_title: 'Structural Analysis Engineer',
				phone: '359-(547)536-5941',
				username: 'ahayes8',
				time_zone: 'Europe/Sofia',
				profile_img: 'http://dummyimage.com/163x109.png/5fa2dd/ffffff',
				birthday: '2002-11-17'
			},
			{
				id: 10,
				first_name: 'Todd',
				last_name: 'Rogers',
				email: 'trogers9@noaa.gov',
				gender: 'Male',
				ip_address: '187.9.242.198',
				company: 'Bluezoom',
				country: 'Portugal',
				favorite_color: '#f79ea6',
				job_title: 'Quality Engineer',
				phone: '351-(257)713-6978',
				username: 'trogers9',
				time_zone: 'Europe/Lisbon',
				profile_img: 'http://dummyimage.com/155x172.jpg/ff4444/ffffff',
				birthday: '1969-12-27'
			}
		];

		this.firstConfigObject = {
			settings: this.getBaseSettings(),
			fields: this.getBaseFields(),
			data: data
		};
		this.secondConfigObject = {
			settings: this.getBaseSettings(),
			fields: this.getBaseFields(),
			data: data
		};
	}
}
