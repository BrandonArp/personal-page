/*	This file is part of Personal page.
	https://github.com/bngreen/personal-page

    Personal page is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Personal page is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Personal page.  If not, see <http://www.gnu.org/licenses/>.
*/

import ProjectObject from './projectobject';
import Technology from './technologies';

export default class Project {
    constructor(public title:string, 
                public mainImage:string, 
                public description:string, 
                public objects:ProjectObject[], 
                public detailsview:string = null, 
                public reposuri:string = null, 
                public contentHeight:string = null,
                public technologies : Technology[] = null,
                public detailsDescription : string = null
                ){

    }

}
