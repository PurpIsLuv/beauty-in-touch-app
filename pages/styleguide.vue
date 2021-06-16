<template>
  <div class="styleguide">
    <h2>Base</h2>
    <div class="d-flex d-flex--column">
      <span class="text text--bold">Выберите роль</span>
      <span class="text text--default">Вход</span>
      <span class="text text--primary">Клиент</span>
      <span class="text text--secondary">Имя</span>
      <span class="text text--placeholder">Еще нет аккаунта?</span>
      <span class="text text--link">Зарегистрируйтесь</span>
      <span class="text text--link text--disabled">Зарегистрируйтесь</span>
      <span class="text text--small">
        Нажимая кнопку Зарегистрироваться, вы принимаете Условия, Политику
        использования данных и Политику в отношении файлов cookie. Вы можете
        получать от нас SMS-уведомления, отказаться от которых можете в любой
        момент.
      </span>
      <span class="text text--alert">Введите номер телефона</span>
    </div>
    <h2>Input</h2>
    <div class="d-flex d-flex--column">
      <v-text-field title="Телефон" />
    </div>
  </div>
</template>
