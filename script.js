


const movieData = `
Sitemizdeki güncel film listesi şudur:
1. Project Hail Mary: Bilim kurgu, uzayda hayatta kalma temalı, gerilim.
2. Sinners: Korku, gerilim, karanlık tema, gizemli olaylar.
3. War Machine: Savaş, dram, askeri operasyonlar, politik hiciv.
4. Dunkirk: Savaş, dram, 2. Dünya Savaşı, Christopher Nolan, tarihi.
5. Mission: Impossible - Fallout: Aksiyon, ajan, Tom Cruise, heyecanlı, casusluk.
6. Twisters: Macera, doğal afetler, hortum avcıları, aksiyon.
7. Top Gun: Maverick: Aksiyon, havacılık, savaş uçakları, Tom Cruise, nostaljik.
8. Skyfall: Aksiyon, casusluk, James Bond, İngiltere, gerilim.
9. Mad Max: Fury Road: Aksiyon, kıyamet sonrası, çöl, arabalı kovalama, distopya.
10. Devotion: Savaş, dram, havacılık, gerçek hikaye, dostluk.
11. Interstellar: Bilim kurgu, uzay, zaman yolculuğu, duygusal, Christopher Nolan.
12. The Dark Knight: Aksiyon, süper kahraman, Batman, Joker, suç, karanlık.
13. Inception: Bilim kurgu, rüya içinde rüya, zihin hırsızlığı, akıl almaz.
14. The Matrix: Bilim kurgu, siberpunk, sanal gerçeklik, felsefi, aksiyon.
15. Avengers: Endgame: Süper kahraman, Marvel, aksiyon, epik, takım ruhu.
16. Spider-Man: No Way Home: Süper kahraman, çoklu evren, aksiyon, gençlik.
17. Avatar: Bilim kurgu, fantastik, uzaylı gezegen, doğa, görsel şölen.
18. Gladiator: Tarihi dram, Roma İmparatorluğu, intikam, aksiyon, epik.
19. Titanic: Romantik, dram, gemi kazası, duygusal, Leonardo DiCaprio.
20. Forrest Gump: Dram, hayat hikayesi, ilham verici, duygusal, komedi.
21. The Shawshank Redemption: Dram, hapishane, umut, arkadaşlık, başyapıt.
22. The Godfather: Suç, mafya, dram, aile, klasik.
23. Pulp Fiction: Suç, kara komedi, kült, parçalı kurgu, Quentin Tarantino.
24. Fight Club: Psikolojik gerilim, tüketim eleştirisi, Brad Pitt, ters köşe.
25. The Lord of the Rings: The Fellowship of the Ring: Fantastik, macera, Orta Dünya, epik.
26. Harry Potter and the Sorcerer's Stone: Fantastik, büyü, çocukluk, macera.
27. Star Wars: Episode IV - A New Hope: Bilim kurgu, uzay operası, Jedi, klasik.
28. Jurassic Park: Macera, bilim kurgu, dinozorlar, gerilim, hayatta kalma.
29. The Terminator: Bilim kurgu, aksiyon, yapay zeka, zaman yolculuğu.
30. Back to the Future: Bilim kurgu, komedi, zaman makinesi, eğlenceli, nostalji.
31. Indiana Jones and the Raiders of the Lost Ark: Macera, arkeoloji, aksiyon, hazine avı.
32. Die Hard: Aksiyon, rehine kurtarma, tek mekan, Bruce Willis, yılbaşı.
33. John Wick: Aksiyon, intikam, yakın dövüş, Keanu Reeves, silahlı çatışma.
34. The Silence of the Lambs: Psikolojik gerilim, suç, seri katil, dedektiflik.
35. Seven: Suç, gizem, gerilim, karanlık tema, dedektif.
36. Shutter Island: Psikolojik gerilim, gizem, akıl hastanesi, ters köşe.
37. Parasite: Gerilim, kara komedi, sınıf çatışması, ödüllü, Güney Kore.
38. Joker: Psikolojik dram, suç, çizgi roman köken hikayesi, karanlık, toplum eleştirisi.
39. The Truman Show: Komedi, dram, medya eleştirisi, Jim Carrey, felsefi.
40. Catch Me If You Can: Suç, biyografi, dolandırıcılık, kedi-fare oyunu.
41. The Wolf of Wall Street: Biyografi, komedi, finans, borsa, çılgın partiler.
42. A Beautiful Mind: Biyografi, dram, matematik, zeka, duygusal.
43. The Green Mile: Dram, hapishane, doğaüstü, duygusal, Stephen King.
44. Schindler's List: Tarihi dram, Holokost, 2. Dünya Savaşı, biyografi.
45. Saving Private Ryan: Savaş, dram, Normandiya Çıkarması, askeri, gerçekçi.
46. 1917: Savaş, gerilim, 1. Dünya Savaşı, tek çekim tekniği, hayatta kalma.
47. Blade Runner 2049: Bilim kurgu, siberpunk, distopya, görsel şölen.
48. Arrival: Bilim kurgu, uzaylılarla iletişim, dilbilim, gizem, duygusal.
49. Dune: Bilim kurgu, çöl gezegeni, politik entrika, epik macera.
50. Knives Out: Gizem, suç, dedektiflik, kara komedi, kim yaptı.
`;

async function askWitBot() {
    const userInputElement = document.getElementById("user-input");
    const chatContent = document.getElementById("chat-content");
    const userInput = userInputElement.value;

    if (!userInput.trim()) return; 

    
    chatContent.innerHTML += `<div style="margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;"><b>Sen:</b> ${userInput}</div>`;
    userInputElement.value = ""; 

    
    const loadingId = "loading-" + Date.now();
    chatContent.innerHTML += `<div id="${loadingId}" style="margin-bottom: 10px; color: gray; font-style: italic;">WitBot filmleri tarıyor...</div>`;
    chatContent.scrollTop = chatContent.scrollHeight;

    try {
        const prompt = `Sen "WitFlix" platformunun enerjik, empati yeteneği yüksek ve sinema aşığı kişisel asistanı WitBot'sun. En büyük önceliğin %100 müşteri memnuniyeti sağlamak ve kullanıcının o anki ruh haline tam oturan filmi bulmak. Elindeki TEK film arşivi şudur: ${movieData}. (DİKKAT: Asla bu listede olmayan bir filmi önerme veya uydurma!). İzleyicilerle konuşurken şu kurallara kesinlikle uy: 1. Duyguyu Yakala ve Empati Kur. 2. Çözüm Odaklı Alternatifler Sun. 3. Kararsızlığı Gider (En fazla 3 seçenek sun). 4. Akıcı, doğal ve kısa ol. İzleyicinin Sorusu / Mesajı: ${userInput}`;

        const safeApiKey = API_KEY.trim(); 
        const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + safeApiKey;

        
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        const data = await response.json();
        document.getElementById(loadingId).remove();

        
        if (!response.ok) {
            console.error("API Hatası:", data);
            chatContent.innerHTML += `<div style="margin-bottom: 10px; color: red;"><b>Sistem Uyarı:</b> Bağlantı kurulamadı. F12 Konsola bak!</div>`;
            return; 
        }

        
        const aiText = data.candidates[0].content.parts[0].text;
        
        
        const formattedText = aiText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

        chatContent.innerHTML += `<div style="margin-bottom: 15px; color: #333; line-height: 1.5; white-space: pre-wrap;"><b style="color: #E50914;">WitBot:</b><br>${formattedText}</div>`;
    } catch (error) {
        document.getElementById(loadingId).remove();
        console.error("Sistem Çöktü:", error);
        chatContent.innerHTML += `<div style="margin-bottom: 10px; color: red;"><b>WitBot:</b> Üzgünüm, sisteme bağlanamıyorum.</div>`;
    }
    
    chatContent.scrollTop = chatContent.scrollHeight;
}

function toggleChat() {
    const container = document.getElementById("witbot-container");
    container.style.display = container.style.display === "none" ? "flex" : "none";
}