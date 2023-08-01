describe('Get the list of Open PRs and print it in a CSV format', () => {
    it('Get the list of Open PRs and print it in a CSV format', () => {

        const apiURL = 'https://api.github.com/repos/appwrite/appwrite/pulls';
        //https://api.github.com/repos/:owner/:repo/pulls

        cy.request({
            method: 'GET',
            url: apiURL,
            failOnStatusCode: true,
            qs: { 'state': 'open' }

        }).then((res) => {
            cy.log(res.status);
            if (res.status === 200) {
                const responseBody = res.body;
                cy.log(responseBody)
                // console.log(responseBody)

                if (Array.isArray(responseBody)) {

                    const openPrData = responseBody.map((data) => ({
                        name: data.title,
                        created_at: data.created_at,
                        author: data.user.login,
                    }))

                    console.table(openPrData);
                    console.log( 'This is an acutal data to transform into csv');

                    const headers = Object.keys(openPrData[0]).toString();
                    cy.log(headers);
                    
                    
                    const csv = openPrData.map((val) =>{
                        return Object.values(val).toString();                                             
                    })

                    const csvFormat = [headers, ...csv].join('\n');
                    cy.log(csvFormat);
                    cy.writeFile('csvFiles',csvFormat);            
                } else {
                    cy.console.error('Not a correct Formatted response');
                }
            } else{
                cy.error('Not a 200 response from the Git API');
            }
        })


    })
})