// Copyright (c) 2024, Tech4Good Community and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Overall Donation", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Overall Donation', {
	refresh(frm) {
		frappe.db.get_list('Donation', {
            fields: ['date_of_donation', 'tranche_amount','donor_id', 'donation_status', 'docstatus'],
            filters: {donor_id: ['=', frm.doc.donor_id]}
        }).then(records => {
            frm.doc.donation_list=[];
            console.log(records);
            $.each(records, function(i, r) {
                let new_entry=frm.add_child('donation_list');
                new_entry.donation_date=r.date_of_donation;
                new_entry.donation_amount=r.tranche_amount;
                new_entry.donation_status=r.donation_status;
                new_entry.doc_status=r.docstatus;

            });
            refresh_field("donation_list");
            frm.set_df_property("donation_list", "read_only", 1); 
	    frm.fields_dict['donation_list'].grid.wrapper.find('.btn-open-row').hide();
            $(".col.grid-static-col.d-flex.justify-content-center").css("pointer-events", "none");
            
        });
        
        frappe.db.get_list('Utilisation', {
            fields: ['date_of_utilisation', 'utilisation_amount','donor_id', 'utilisation_status', 'docstatus'],
            filters: {donor_id: ['=', frm.doc.donor_id]}
        }).then(records => {
            frm.doc.utilisation_list=[];
            //console.log(records);
            $.each(records, function(i, r) {
                let new_entry=frm.add_child('utilisation_list');
                new_entry.utilisation_date=r.date_of_utilisation;
                new_entry.utilisation_amount=r.utilisation_amount;
                new_entry.utilisation_status=r.utilisation_status;
                new_entry.doc_status=r.docstatus;

            });
            refresh_field("utilisation_list");
            frm.set_df_property("utilisation_list", "read_only", 1); 
	    frm.fields_dict['utilisation_list'].grid.wrapper.find('.btn-open-row').hide();
	    $(".col.grid-static-col.d-flex.justify-content-center").css("pointer-events", "none");
            
        });
	}
})

