# HearU

**A communication board for people who can't speak.**

HearU helps non-verbal people, including autistic people and people with aphasia after a stroke, express what they need. They tap a card and the app says the phrase out loud. It was designed with adults in mind too, not only children.

Built by our team at **Inovathon WTM – "Redefinir o Possível"**, a hackathon on digital inclusion and accessibility held at Google's office in São Paulo (2025).

## What it does

**Speak by tapping** (`fala_voz.html`)
- Ready-made phrases grouped by need, each with an icon:
  - Physical comfort: adjust my pillow, I'm cold, I want to sit up
  - Food, water and basic needs: I'm hungry, I want water, I need the bathroom
  - Leisure: I want to watch TV, I'd like some silence
  - Human contact: hold my hand, stay here with me
  - Communication: I'm trying to say something, I want to take part in decisions about me
  - Spirituality and emotions: I need peace now, I'm scared and need comfort
- Each card is read aloud with the browser's speech synthesis (pt-BR)
- **Custom phrases**: caregivers or users can save their own phrases, which are stored on the device and spoken with one tap
- **Speech recognition**: captures what someone says and repeats it

**Daily planning board** (`quadro_planejamento.html`)
- A visual morning, afternoon and evening board
- Drag activities (eat, bath, study, play, sleep) into the day, with touch support for tablets

## Tech

- HTML, CSS, JavaScript
- Web Speech API (`SpeechSynthesis` and `SpeechRecognition`)
- `localStorage` for saved phrases
- Drag and drop (mouse and touch)

No install and no backend: open the HTML files in the browser.

## Run it

```bash
git clone https://github.com/FreitasProcopio/Inovathion.git
```

Open `fala_voz.html` or `quadro_planejamento.html` in Chrome or Edge, which support speech recognition.

## Team

Sylvana Baltazar, Matheus de Souza, Alan Mendes, Kawan Barbosa Turchiai and Pedro Procópio.
