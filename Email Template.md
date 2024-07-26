<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            font-size: 14px;
        }

        .footer {
            text-align: center;
            margin-bottom: 20px;
        }

        .footer img {
            width: 100px;
        }

        .footer h1 {
            margin-top: 10px;
        }

        .content {
            margin-bottom: 20px;
        }

        .content p {
            margin: 5px 0;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>

<body>

    <div class="content">
        <p><strong>Receipt No:</strong> {{ name }} <span style="float:right;"><br><strong>Date:</strong> {{ frappe.utils.formatdate(date_of_donation, 'dd MMMM YYYY') }}</span></p>
        <br>
        <p><strong>To,</strong></p>
        <p>{{ donor_name }}</p>
        <p>PAN:{{ pan_card }}</p>
        <p>Address:{{ frappe.db.get_value("Donor", donor_id , "address") }}</p>
        <br>
        <p><strong>From,</strong></p>
        <p>Udhyam Learning Foundation</p>
        <p>CIN NO: U80904KA2017NPL101834, PAN NO: AACCU0660K </p>
        <p>House No 2B, 1st Floor, Municipal No.27/4</p>
        <p>Garden Homes Apartments, Shivanchetty Gardens, Aga Abbas Ali Road, Ulsoor</p>
        <p>Bangalore - 560042, Karnataka</p>
        <br>
        <p>Dear Sir/Madam,</p>
        <br>
        <p>Thank you for your donation of &#8377; {{ tranche_amount }}. Your support is greatly appreciated by our team as it will help us to implement the goals of the organization. This letter provides documentation for your tax records and confirms that, as part of this donation you did not receive any goods or services in return for your donation. All donations are exempted U/s 80G of the Income Tax Act 1961 for the financial year {{ frappe.db.get_value(
        "Fiscal Year", {"year_start_date" : ["<=", date_of_donation], "year_end_date": ['>=', date_of_donation]},
        "name"
    ) }}. Registered as a Charitable Trust with Regn No: CIT (E) BLR/12A/T-10/AACCU0660K</p>
        <p>Received with thanks from <strong>{{ donor_name }}</strong> an amount of Rupees <strong>{{ tranche_amount }}</strong> vide {{ mode_of_payment }} dated {{ date_of_donation }} on account of Donation.</p>
        <br>
        <p>We look forward to your association with Udhyam Learning Foundation.</p>
        <br>
        <p>Thank you once again,</p>
        <p>Warmly and with gratitude,</p>
        <br>
        <p><strong>Director</strong></p>
        <p>Udhyam Learning Foundation</p>
    </div>
    <div class="footer">
        <img width = "20%" src="https://udhyam.org/wp-content/uploads/2024/04/top-logo.png" alt="Company Logo">
    </div>
</body>

</html>
