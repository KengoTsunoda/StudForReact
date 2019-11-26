import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// 必要なファイルを読み込み
import "./styles.css";
// コンポーネントファイルを読み込み
import List from "./components/List";
import Detail from "./components/Detail";

// データ取得する関数(今回は無視)
const useAPIData = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson);
      });
  }, [page, limit]);

  return {
    data,
    setPage,
    setLimit
  };
};

// 画像閲覧アプリ
const App = () => {
  // データ取得
  const { data } = useAPIData();
  // Detailに表示するデータを宣言
  const [displayData, setDisplayData] = useState(null);

  // dataを取得するたびに呼び出される処理
  useEffect(() => {
    setDisplayData(data[0]);
  }, [data]);

  // リストでクリックした時に呼び出したい処理
  const handleDisplayData = id => {
    const newDisplayData = data.filter(v => v.id === id)[0];
    setDisplayData(newDisplayData);
  };

  return (
    <div className="App">
      <List data={data} handleDisplayData={handleDisplayData} />
      <Detail displayData={displayData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
