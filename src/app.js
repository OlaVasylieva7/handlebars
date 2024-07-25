import { minions } from "./minionsData";
import itemsTemplate from "../templates/card.hbs"

const list = document.querySelector('.minion__list');

const markUp = itemsTemplate(minions);

list.insertAdjacentHTML("beforeend", markUp);