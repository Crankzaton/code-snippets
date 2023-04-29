//Implementation of Dynamic drop down values for a single drop down based on the variable selected by the User

//The drop down values of the field can be altered based on the field selection of other variables in the record producer

//The implementation uses combination of Script Include and Advanced Reference Qualifier

Reference Qualifier: dynamicusers(current.variables.variable_name.getDisplayValue());


function dynamiusers(paramter) {
    var users = [];
    if (region == 'Africa') { //Incase if Africa is selected by user
        var getAPACMembers = new GlideRecord('sys_user_grmember');
        getAPACMembers.addQuery('group.name', "Africa Group memebers");
		getAPACMembers.addQuery('user.active', "true");
        getAPACMembers.query();
        while (getAPACMembers.next()) {
            users.push(getAPACMembers.user.toString());
            //answer.push(grmembers.group.toString());
        }
    } else if (parameter == 'America') { //Incase if America is selected by user
        var getAMERMembers = new GlideRecord('sys_user_grmember');
        getAMERMembers.addQuery('group.name', "America Group memebrs");
		getAMERMembers.addQuery('user.active', "true");
        getAMERMembers.query();
        while (getAMERMembers.next()) {
            users.push(getAMERMembers.user.toString());
        }
    }
    var encodedQuery = 'sys_idIN' + users.join(',');
    return encodedQuery;
} 
