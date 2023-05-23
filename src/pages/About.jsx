import React from "react";
import { Container } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <h2>Обо мне</h2>
      <Card className="bg-dark text-white">
        <Card.Body>
          <Card.Title>Добрый день! Меня зовут Думан</Card.Title>
          <Card.Text>Я являюсь Middle Frontend разработчиком</Card.Text>
          <Card.Text>
            Меня заинтересовала ваша вакансия, хотел бы пройти у вас
            собеседование
          </Card.Text>
          <Card.Text>🕑Формат работы: удаленный</Card.Text>
          <Card.Text>⌛️Возраст: 19 лет</Card.Text>
          <Card.Text>⏱Опыт работы: 2 года</Card.Text>
          <Card.Text>Местоположение: Казахстан Астана</Card.Text>
          <Card.Text>🛩Релокация: готов</Card.Text>
          <Card.Text>Семейное положение: Женат</Card.Text>
          <Card.Text>
            Телеграм: <a href="https://t.me/duwwwkaa">https://t.me/duwwwkaa</a>
          </Card.Text>
          <Card.Text> 📩Почта: dybysbayd@gmail.com</Card.Text>
          <Card.Text> GitHub: <a href="https://github.com/dumanmonster">dumanmonster</a></Card.Text>
          <Card.Text>
            Подробнее обо мне и краткое резюме находится в моем {" "}
            <a href="https://grove-rainbow-ca3.notion.site/19-27f62172e7c745e3857fefff7a4b2262">
              Notion
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
