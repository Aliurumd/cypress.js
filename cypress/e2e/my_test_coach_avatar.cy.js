
 describe('Покупка аватара', function () {

    const validEmail = "USER_LOGIN"
    const validPassword = "USER_PASSWORD"

    it('e2e тест на покупку аватара тренера', function () {
        cy.visit('https://pokemonbattle.ru/login');
        cy.get('#k_email').type(validEmail);
        cy.get('#k_password').type(validPassword);
        cy.get('.MuiButton-root').click();
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="shop"]').click();
        cy.get('.available > button').first().click();
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type("4111111111111111");
        cy.get(':nth-child(1) > .style_1_base_input').type("01/26");
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type("125");
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type("german dolnikov");
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.get('.style_1_base_input').type("56456");
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно').should('be.visible')
        cy.get('.style_1_base_link_blue').click();
        cy.get('.header_card_trainer').click();
     })
 })