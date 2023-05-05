export const eleClick=(loc)=>{
    cy.get(loc).click();
}

export const eleForceClick=(loc)=>{
    cy.get(loc).click({force:true});
}

export const eleSelect=(loc,arg)=>{
    cy.get(loc).click(arg);
}

export const eleType=(loc,arg)=>{
    cy.get(loc).type(arg).should('have.value',arg);
}

export const eleCheck=(loc,Check)=>{
    cy.get(loc).should('not.be.checked').check()
}
export const eleUnCheck=(loc)=>{
    cy.get(loc).uncheck()
}

export const eleScrollTo=(loc)=>{
    cy.get(loc).scrollIntoView()
}

