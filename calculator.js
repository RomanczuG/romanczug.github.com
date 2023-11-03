function evaluatePlan(startDate, jobStartDate) {
    const planEvaluationDiv = document.querySelector('.plan-evaluation');

    // Simple example check: if jobStartDate is in September (month index 8)
    if (new Date(jobStartDate).getMonth() === 8) {
        planEvaluationDiv.innerHTML = '<p class="plan-bad">Plan is bad</p>';
    } else {
        planEvaluationDiv.innerHTML = '<p class="plan-good">Plan is good</p>';
    }
}


function calculateOPT() {
    const graduationDate = new Date(document.getElementById('graduationDate').value);
    const jobStartDate = new Date(document.getElementById('jobStartDate').value);

    const optStartApplicationDate = new Date(graduationDate);
    optStartApplicationDate.setDate(graduationDate.getDate() - 90);

    const optEndApplicationDate = new Date(graduationDate);
    optEndApplicationDate.setDate(graduationDate.getDate() + 60);

    const latestTravelDate = new Date(jobStartDate);
    latestTravelDate.setDate(jobStartDate.getDate() - 60); // 60 days before job start to account for I-94 travel restrictions

    evaluatePlan(graduationDate, jobStartDate);
    
    let resultsHTML = `
    <h2>OPT Timeline</h2>
    <p><strong>Start Applying for OPT:</strong> ${optStartApplicationDate.toDateString()} (It's recommended to apply as early as possible since it can take up to 3 months to receive your EAD)</p>
    <p><strong>End Applying for OPT:</strong> ${optEndApplicationDate.toDateString()}</p>
    <p><strong>Latest recommended travel date:</strong> ${latestTravelDate.toDateString()} (due to I-94 travel restrictions, see more details below)</p>
    <p><strong>OPT Employment Duration:</strong> 12 months</p>
    <p><strong>Note:</strong> Cannot accrue more than 90 days of unemployment during the 12 months. Eligible students can file for a STEM 17-month extension before the expiration of the EAD card.</p>
    <h3>Additional Information:</h3>
    <ul>
        <li><strong>OPT:</strong> Optional Practical Training. It allows F1 students to work in their field of study for 12 months. Application is first made through the university's international student office, then forwarded to USCIS.</li>
        <li><strong>EAD:</strong> Employment Authorization Document. It's a card proving your eligibility to work in the U.S. during your OPT period.</li>
        <li><strong>Application:</strong> First, you need to apply through your university's international office. They will guide you through the process, ensuring you have the necessary documentation. Once they endorse your OPT, you will send your application to the U.S. Citizenship and Immigration Services (USCIS).</li>
        <li><strong>Documents Needed:</strong> 
            <ul>
                <li>Form I-765 (Application for Employment Authorization)</li>
                <li>Copy of your current I-20 (endorsed for OPT)</li>
                <li>Copy of your passport</li>
                <li>Two passport-size photos</li>
                <li>Check or money order for the application fee</li>
                <li>Copy of any previous EAD (if applicable)</li>
            </ul>
        </li>
        <li>If you plan on traveling outside the U.S., ensure your F1 visa is valid. If it's expired, you'll need to renew it before returning to the U.S.</li>
    </ul>
    <div class="travel-info">
    <h2>Understanding the Travel Restrictions During EAD Application and OPT</h2>
    
    <h3>1. Traveling While EAD/OPT Application is Pending:</h3>
    <ul>
        <li><strong>Before Graduation:</strong> Travel and re-entry are generally safe. Ensure you have a valid F-1 visa, a valid I-20 with a recent DSO signature, and valid reasons for your return to the U.S.</li>
        <li><strong>After Graduation:</strong> Travel is riskier. If your EAD isn't approved and you don't have a job or offer, CBP might deny re-entry. If your EAD is approved while abroad, you need the EAD card and other documents to re-enter.</li>
    </ul>

    <h3>2. Traveling Once OPT is Approved:</h3>
    <ul>
        <li>After receiving your EAD card, ensure you have the EAD card, a job or job offer, a valid passport, a valid F-1 visa stamp, and a recent I-20 signed for travel to re-enter the U.S.</li>
    </ul>

    <h3>3. Concerns with I-94:</h3>
    <ul>
        <li>If you leave the U.S. while your EAD application is pending, it might be considered "abandoned" and could be denied.</li>
    </ul>

    <h3>4. Expired F-1 Visa:</h3>
    <ul>
        <li>If your F-1 visa expires while on OPT, renew it before re-entering. Securing a new F-1 visa while on OPT can be challenging.</li>
    </ul>

    <p class="key-takeaway">Always consult with your DSO or an immigration attorney before making travel decisions during this time.</p>
</div>
    `;

    document.getElementById('results').innerHTML = resultsHTML;
}
