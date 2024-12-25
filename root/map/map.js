// Инициализируем карту с координатами по умолчанию (Казахстан)
const map = L.map('map').setView([48.0196, 66.9237], 5); // Широта и долгота для Казахстана, масштаб 5

// Добавляем слой с картой (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Пример данных отделения (эти данные можно будет получить из системы Kazpost)
const branchData1 = {
    id: "BRANCH001",
    latitude: 43.233163, // Пример координат в Казахстане
    longitude: 76.907790, // Алматы
    name: "Отделение №1",
    status: "Открыто"
};

const branchData2 = {
    id: "BRANCH002",
    latitude: 43.25217608606351, // Пример координат в Казахстане
    longitude: 76.93292571732661, // Алматы
    name: "Отделение №2",
    status: "Закрыто"
};

const branchData3 = {
    id: "BRANCH003",
    latitude: 43.268691593797264, // Пример координат в Казахстане
    longitude: 76.93373478659372, // Алматы
    name: "Отделение №3",
    status: "Закрыто"
};


// Отображаем маркер для первого отделения на карте
const branchMarker1 = L.marker([branchData1.latitude, branchData1.longitude]).addTo(map)
    .bindPopup(`<b>${branchData1.name} (ID: ${branchData1.id})</b><br>Статус: ${branchData1.status}`).openPopup();

// Обновляем информацию об отделении на странице
document.getElementById('branch-id1').textContent = `ID Отделения: ${branchData1.id}`;
document.getElementById('branch-location1').textContent = `Местоположение: (${branchData1.latitude}, ${branchData1.longitude})`;
document.getElementById('branch-status1').textContent = `Статус: ${branchData1.status}`;

// Отображаем маркер для второго отделения на карте
const branchMarker2 = L.marker([branchData2.latitude, branchData2.longitude]).addTo(map)
    .bindPopup(`<b>${branchData2.name} (ID: ${branchData2.id})</b><br>Статус: ${branchData2.status}`).openPopup();

// Обновляем информацию о втором отделении на странице
document.getElementById('branch-id2').textContent = `ID Отделения: ${branchData2.id}`;
document.getElementById('branch-location2').textContent = `Местоположение: (${branchData2.latitude}, ${branchData2.longitude})`;
document.getElementById('branch-status2').textContent = `Статус: ${branchData2.status}`;

//Отображаем маркер для третьего отделения на карте
const branchMarker3 = L.marker([branchData3.latitude, branchData3.longitude]).addTo(map)
    .bindPopup(`<b>${branchData3.name} (ID: ${branchData3.id})</b><br>Статус: ${branchData3.status}`).openPopup();

// Обновляем информацию о третьем отделении на странице
document.getElementById('branch-id3').textContent = `ID Отделения: ${branchData3.id}`;
document.getElementById('branch-location3').textContent = `Местоположение: (${branchData3.latitude}, ${branchData3.longitude})`;
document.getElementById('branch-status3').textContent = `Статус: ${branchData3.status}`;

 