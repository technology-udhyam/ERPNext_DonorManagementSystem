function convertToDonor(frm) {
    if (!frm.doc.pan_card || !frm.doc.email) {
        frappe.msgprint(('PAN Card and Email address are mandatory for converting to a Donor'));
        return;
    }

    frm.save();

    var leadName = frm.doc.lead_name;
    var email = frm.doc.email;
    var pan_card = frm.doc.pan_card;

    frappe.confirm(
        __('This action will create a new donor record with the following details:') +
        '<br><br>' +
        __('Lead Name: {0}', [leadName]) +
        '<br>' +
        __('Email: {0}', [email]), // Add email here
        () => { 
            frappe.call({
                method: "donor_management.donor_management.doctype.leads.custom.create_or_update_donor",
                args: {
                    pan_card: pan_card,
                    lead_name: leadName,
                    email: email, 
                    name: frm.doc.name
                },
                callback: function(r) {
                    if (r.message.status=='success') { 
                        //frm.set_value("lead_status", "Converted to Donor");
                        //frm.save();
                        frappe.msgprint(('Lead converted to donor successfully.'));
                        frappe.msgprint((r.message.text));
                    } else {
                        frappe.msgprint(('Conversion to donor failed.'));
                        frappe.msgprint((r.message.text));
                    }
                }
            });
        },
        () => {
            frappe.msgprint(__('Conversion to donor cancelled.'));
        }
    );
}

frappe.ui.form.on('Leads', {
    refresh: function(frm) {
        if (!frm.doc.__islocal && !frm.doc.donor) {
	    if (frm.doc.lead_status!="Converted to Donor") {
            	frm.add_custom_button(__('Convert to Donor'), function() {
            	    convertToDonor(frm);
            	}).addClass('btn-primary');
	    }
        }
    }
});
