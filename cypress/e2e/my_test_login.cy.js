import * as data from "../helpers/default_data.json";

describe('Проверка авторизации', function () {

   const validEmail = data.login;
   const validPassword = data.password;

   beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
           });

   afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        });
//Пункт 1
   it('Позитивная проверка: Верный логин + верный пароль', function() {
        cy.get('#mail').type(validEmail);
        cy.get('#pass').type(validPassword);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');

   })
//Пункт 2
    it('Проверка логики восстановления пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type(validEmail);
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    })
//Пункт 3
    it('Негативная проверка: Верный логин + НЕверный пароль', function () {
        cy.get('#mail').type(validEmail);
        cy.get('#pass').type('LOVE');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })
//Пункт 4
    it('Негативная проверка: НЕверный логин + верный пароль', function () {
        cy.get('#mail').type('notgerman@dolnikov.ru');
        cy.get('#pass').type('validPassword');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })
//Пункт 5
    it('Негативная проверка: Валидация на наличие @ в логине', function () {
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('validPassword');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    })
//Пункт 6 (должен упасть)
    it('Позитивная проверка (упадет): Верный логин (С измененным регистром) + верный пароль', function() {
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('validPassword');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
   })

})
