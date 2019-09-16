
describe("App E2E", () => {
  beforeEach(() => {
    cy.visit('/')

    var counterScroll = 0
    // function that will call itself 3-times, scrolling only 3 times
    const scroll = () => { 
      cy.wait(1500).then(() => {
        counterScroll += 1
        cy.wait(1000).scrollTo(50,0)
        cy.wait(1000).scrollTo('bottom')

        return counterScroll === 3 ? null : scroll()
      })
    }
    scroll()
  })
  it("displays the app and scrolls",()=>{ 
    cy.get('.ProductsGrid').children().its('length').should('be.gt', 20)
  }) 

  it("reloads data on clicking sort icons",() =>{
    cy.get('.SortIcons').children(1).get('.ant-btn').last().click()
    cy.wait(2000).then(() =>{
      cy.get('.ProductsGrid').children().its('length').should('be.gt', 10)
      
    }) 
  })

  
    
  });
  