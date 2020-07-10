// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from "axios";

function createTopicItem(topicName) {
  const tabItem = document.createElement("div");
  tabItem.classList.add("tab");
  tabItem.innerText = `${topicName}`;
  return tabItem;
}

const topicContainer = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((result) => {
    const topicList = result.data.topics;
    topicList.forEach((topic) => {
      const topicElement = createTopicItem(topic);
      topicContainer.appendChild(topicElement);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
