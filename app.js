document.addEventListener('DOMContentLoaded', () => {
    /*
      All audio and images curtosey of archive.org. What a solid website!
    */
    const src = [
      [
        "Виталий Подземный", "Черная Волга", "https://drive.google.com/uc?export=download&id=11lr_5AS2CW-Sc5GNuV1dyXlmgBNyGeKG",
        "https://sun9-west.userapi.com/sun9-54/s/v1/if2/Kas3ZayJT1cUz0XqcTgruytNGALR64AAD2559vtgUao9BdO8Nqr20sbvjoLgv3hRswfnR_GtbpzFkZlkfpxdCGbt.jpg?size=2560x1824&quality=96&type=album"
      ],

      [
        "Виталий Подземный", "Оркестр", "https://drive.google.com/uc?export=download&id=18qiNsOlitUBshi44eTwBZ_bDFsrmZ633",
        "https://sun9-west.userapi.com/sun9-54/s/v1/if2/Kas3ZayJT1cUz0XqcTgruytNGALR64AAD2559vtgUao9BdO8Nqr20sbvjoLgv3hRswfnR_GtbpzFkZlkfpxdCGbt.jpg?size=2560x1824&quality=96&type=album"
      ],
      [
        "Artyom Smallkid", "Рай в шалаше", 
        "https://drive.google.com/uc?export=download&id=1iQFYzTT8z19bNpdivUxSGl6fE_vZoLYA",
        "https://sun9-east.userapi.com/sun9-20/s/v1/if1/RV3MYsymr16997zW5iqpXpkkJxQJaY0CRLb4djtWShX7bCRdQu96JMvpvbhNnAoy472sUg.jpg?size=2560x1696&quality=96&type=album"
      ],
      

      [
        "Серж Левинс ", "Скоро будет солнечно", 
        "https://drive.google.com/uc?export=download&id=1NaU5S7xgIwvOMV2e2knV6Nc3-dzq6hTF",
        "https://sun9-north.userapi.com/sun9-77/s/v1/if2/30qzQGGEyz7qm4bc63I5RBiedjNM7JiAn8O2HFVzZAntsnTqQRTMTSQtlr5ZvGmccV-6VHiZ_7xFg1eI0xv6yXFZ.jpg?size=1727x927&quality=95&type=album"
      ],
      
      [
        "Дворовый стиль", "Письмо", "https://drive.google.com/uc?export=download&id=1MdIn8mkCZBs_cgUaipaOBMzqpehd7mdR",
         "https://sun9-west.userapi.com/sun9-56/s/v1/if1/3aNTcY7iHbySv6CA4ezw5A2aYHLv89gnEC-DSYEqLK1tBMIfr5ohiAy9E-Fdxda3H25lwfLT.jpg?size=988x1080&quality=96&type=album"
      ],
      [
        "Константин Рубан", "Небо в алмазах", "https://drive.google.com/uc?export=download&id=1oerxx4CIHtaBoQdRAxF3CvixNSa5tlWw",
         "https://sun9-west.userapi.com/sun9-3/s/v1/if2/XxipmDPI3_hS6pK1jmoX9lQoQHFnnWvCVy1qsZxwDhgPGeFQCQpflVX60mXyZPFQpW73EiRdRls98x9VVKtChWIM.jpg?size=1620x2160&quality=95&type=album"
      ],
      [
        "Дворовый стиль", "Бог устал нас любить", "https://drive.google.com/uc?export=download&id=1DeDrRZpmAeqow7Gx5TsHxrYlzwJHHU_B",
         "https://sun9-west.userapi.com/sun9-56/s/v1/if1/3aNTcY7iHbySv6CA4ezw5A2aYHLv89gnEC-DSYEqLK1tBMIfr5ohiAy9E-Fdxda3H25lwfLT.jpg?size=988x1080&quality=96&type=album"
      ],

      [
        "Шпионка Мари", "Сердце", "https://drive.google.com/uc?export=download&id=1QU17af4I3OePI15t5iHiNmrIzsGBLOx5",
         "https://sun9-83.userapi.com/s/v1/if2/NZ68F_l7zkKvJ-jmeii3x1ySDxWAMLuVLEdTflq1Hx-yeEtd3vuz0Ei8ZPHJ88XDA4Gj4FQufDoaH4WftXD0ZKDe.jpg?size=900x1600&quality=96&type=album"
      ],
      [
        "Николай Зайцев", "Дочь Самурая", "https://drive.google.com/uc?export=download&id=1x7K2Uu-JVQuGzAzJ_oWYojcmCZY0S8U_",
         "https://sun9-east.userapi.com/sun9-43/s/v1/if1/GwmwD98zYDjdBR55XFk9qmXZH6yiSpLY7E7vghBa738yPxmDQOVxgk9sGHcpAoQvCXTIkTM8.jpg?size=1620x2160&quality=96&type=album"
      ],
      [
        "Шпионка Мари", "Мороз по коже", "https://drive.google.com/uc?export=download&id=1gjjAIcFoHqGSabo-TfbKv1dpZC-4dVZc",
         "https://sun9-83.userapi.com/s/v1/if2/NZ68F_l7zkKvJ-jmeii3x1ySDxWAMLuVLEdTflq1Hx-yeEtd3vuz0Ei8ZPHJ88XDA4Gj4FQufDoaH4WftXD0ZKDe.jpg?size=900x1600&quality=96&type=album"
      ],
      [
        "Николай Зайцев", "Орбит без сахара", "https://drive.google.com/uc?export=download&id=1YvtHEmybr2Iq7zBiNppGxQEeM0wFGswE",
         "https://sun9-east.userapi.com/sun9-43/s/v1/if1/GwmwD98zYDjdBR55XFk9qmXZH6yiSpLY7E7vghBa738yPxmDQOVxgk9sGHcpAoQvCXTIkTM8.jpg?size=1620x2160&quality=96&type=album"
      ],
      [
        "Василий Рыжкин", "Линия жизни", "https://drive.google.com/uc?export=download&id=1fn0KOc5QPtb-9W9C0crC2fyGGTbJzEld",
         "https://sun9-west.userapi.com/sun9-12/s/v1/ig2/WBJKA6PPcmUIzvxImLVQkg9sCdUefrEEDqhE306tULZGjzZn08TQ84-t4DPHWpkebnJlkuh6KGqRprRN6AuAOl5_.jpg?size=958x1280&quality=96&type=album"
      ],
      [
        "Василий Рыжкин", "Новые люди", "https://drive.google.com/uc?export=download&id=1kqsUi67p-GwqIm-D3mOCmYkbgzCJjW4M",
         "https://sun9-west.userapi.com/sun9-12/s/v1/ig2/WBJKA6PPcmUIzvxImLVQkg9sCdUefrEEDqhE306tULZGjzZn08TQ84-t4DPHWpkebnJlkuh6KGqRprRN6AuAOl5_.jpg?size=958x1280&quality=96&type=album"
      ],
      [
        "Жанат Акбулатов", " Моя любовь", "https://drive.google.com/uc?export=download&id=1dfhTAia4renAHtQUPwuELGAkvKeq6zyG",
         "https://sun9-east.userapi.com/sun9-59/s/v1/if2/E8Tp_8c2ohYFCLtAirJe1uc7k5BTFyrfPSoAIbRX3gTb4nwn2Qr8S9oxga2QdgXeHQc5gjTgiMTofqK1rr120_iy.jpg?size=400x400&quality=95&type=album"
      ],
      [
        "Жанат Акбулатов", "Скажи", "https://drive.google.com/uc?export=download&id=1ducPiuhjzibvTfxErHMRWAWMU1npHUFZ",
         "https://sun9-east.userapi.com/sun9-59/s/v1/if2/E8Tp_8c2ohYFCLtAirJe1uc7k5BTFyrfPSoAIbRX3gTb4nwn2Qr8S9oxga2QdgXeHQc5gjTgiMTofqK1rr120_iy.jpg?size=400x400&quality=95&type=album"
      ],

    ];
    
    for (x = 0; x < src.length; x++) {
      var s = src[x];
      var number = parseInt(x) + 1;
      var artist = document.createTextNode(number + ": " + s[0]);
      var track_name = document.createTextNode(s[1]);
      
      var listItem = document.createElement('div');
      var artist_text = document.createElement('h3');
      var track_text = document.createElement('h4');
      
      artist_text.appendChild(artist);
      track_text.appendChild(track_name);
      
      listItem.appendChild(artist_text);
      listItem.appendChild(track_text);
      
      listItem.classList.add('item');
      listItem.dataset.index = x;
      
      document.getElementById('list').appendChild(listItem);
    }
    displayTrack(0);
    
    var listItems = document.querySelectorAll('.item');
    listItems.forEach(el => {
      el.onclick = () => {
        displayTrack(el.dataset.index);
      };
    });
    
    function displayTrack(x) {
      var active = document.querySelector('.is-active');
      if (active) {
        active.classList.remove('is-active'); 
      }
      var el = document.getElementById('list').children[x];
      el.classList.add('is-active');
      var s = src[x],
          artist = s[0],
          track = s[1],
          audio = s[2],
          img = s[3],
          number = parseInt(x) + 1;
      document.getElementById('title').innerText = number + ": " + artist;
      document.getElementById('song_title').innerText = track;
      var albumArt = document.getElementById('art');
      albumArt.src = img;
      albumArt.alt = artist + " " + track;
      document.getElementById('audio').src = audio;
    }
  })