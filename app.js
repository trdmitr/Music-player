document.addEventListener('DOMContentLoaded', () => {
    /*
      All audio and images curtosey of archive.org. What a solid website!
    */
    const src = [
      [
        "Виталий Подземный", "Рождённый в СССР", "https://drive.google.com/uc?export=download&id=1mOxCkT1WHdA4c--jmmNvrZE9cDFs4cI9",
         "https://sun9-31.userapi.com/s/v1/if1/rB8uVMVbb8at_lsfKUImIRM2NgEHAtiFW7l6hloIDnaU-rYNPaZOVItf9vpRqnH9ggvEWW_H.jpg?size=1350x900&quality=96&type=album"
      ],
      [
        "Виталий Подземный", "Кладбище", "https://drive.google.com/uc?export=download&id=1_T0vr2oS2mws2tTzsJ9zuTEMt6t3ze-Z",
        "https://sun9-25.userapi.com/s/v1/if1/uq7utp5-0_n24xRpNX1bdqvYCO1_KsvlKfK0MT7rV8a2mvsT_teu880guhBhbUj6CdrFgw.jpg?size=537x807&quality=96&type=album"
      ],
      [
        "Виталий Подземный", "Московская барыня", "https://drive.google.com/uc?export=download&id=1lDo4nnz6dcpSLsif6jaNCa2O52hDmkRo",
        "https://sun9-77.userapi.com/s/v1/if1/YswOKXKRdKUQH57fpqMz8R612hvPDczY6BVE3-C_aarKsV7hBQkyVrjHHzFZs6lh8ULC-w.jpg?size=537x807&quality=96&type=album"
      ],
      [
        "Artyom Smallkid", "Капитан Колесников", 
        "https://drive.google.com/uc?export=download&id=1iqRaWBY-XAU5UwUHZidsMNQowM1KrlbH",
        "https://sun9-10.userapi.com/s/v1/if1/Xe8-4wyQRRl-fmiefRzI9uCcQG4DGNqx16mYfyihyz8T8JUkwbKI9wMeWBQ03LmYTdbmvw.jpg?size=1080x1920&quality=96&type=album"
      ],
      [
        "ENA_WD & DackFax", "Новая жизнь", "https://drive.google.com/uc?export=download&id=1mBpZuE8sCnE-kj40oQZPOqxy-9sBo6-R",
         "https://sun9-49.userapi.com/s/v1/if2/cSIH3xVQuG0RaRCI2dfBW_hCzZCfLxlmfhnuECjA41nDjWVOmpBt3GuDe2k_Cw3mYIqb99n_1_b4Owf4rd7ay8tE.jpg?size=1920x1080&quality=96&type=album"
      ],
      [
        "ENA_WD & DackFax", "Просвистела", "https://drive.google.com/uc?export=download&id=1BB3ktiugoKhTIYPqEBClTWG89K1E-KCX",
         "https://sun9-21.userapi.com/s/v1/if1/kfO-6fbGm6B78OSHeLmoeGSBS__kvG7l9-iYPJpT055O-T-mzAexwzGB7XflsQamnCOZgy20.jpg?size=960x1280&quality=96&type=album"
      ],
      [
        "Дворовый стиль", "Вороны", "https://drive.google.com/uc?export=download&id=10mnAwtb-KBQitwEDheWh0zGj3y5yim44",
         "https://sun9-12.userapi.com/s/v1/ig2/buaspJUYifMeZp1RTfPR9eI6_srfdiO-_thvTAqMQNqFlSUAnVEXI2qEcs4m2UzKIu9s_AfZJrBs3OPZQST3wIAQ.jpg?size=786x1080&quality=96&type=album"
      ],
      [
        "ENA_WD & DackFax", "Далеко", "https://drive.google.com/uc?export=download&id=1r0zKdpe1-pbLZfKPCNzbpIVIw6Vcs315",
         "https://sun9-80.userapi.com/s/v1/if1/KwVbU01CJFoYuemlfSjffv7S2YKh1v1ggTMvjywRRxveZetelMXw0KS8znCFOs_yXhGOigDB.jpg?size=1280x1024&quality=96&type=album"
      ],
      [
        "Шпионка Мари", "Дождь", "https://drive.google.com/uc?export=download&id=1PYmsuxDz_QKzxPNy-lvQ9BuiWQCVVemT",
         "https://sun9-83.userapi.com/s/v1/if2/NZ68F_l7zkKvJ-jmeii3x1ySDxWAMLuVLEdTflq1Hx-yeEtd3vuz0Ei8ZPHJ88XDA4Gj4FQufDoaH4WftXD0ZKDe.jpg?size=900x1600&quality=96&type=album"
      ],
      [
        "Василий Рыжкин", "Это всё", "https://drive.google.com/uc?export=download&id=1F8jB1Oq8zECd74pSXotAktJS4P3ZNGx_",
         "https://sun9-17.userapi.com/s/v1/ig2/7bi3HGIsG3xPbdZJZ2IRmpB5UxaBzluDOW8Ucj3gOmoqb1Z2MZ8ElzBmYFaGTLYnF8DWYgTUxfmsHY-tH7j7446k.jpg?size=1600x1200&quality=95&type=album"
      ],
      [
        "Жанат Акбулатов", " Мёртвый город. Рождество", "https://drive.google.com/uc?export=download&id=1K-n_Br5unktNZG4xFrurgoRxgJ9sg1JZ",
         "https://sun9-52.userapi.com/s/v1/if1/-HmDP5EHoOqGgOfoXilfVJ3FTVxKRWibkPVOPEwojlIPoEGCdm7fRqLRfQ97cVoT99vCSgKb.jpg?size=490x679&quality=96&type=album"
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