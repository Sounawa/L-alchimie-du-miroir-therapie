'use client';

import React from 'react';
import ProtocolHeader from './ProtocolHeader';
import ProtocolBody from './ProtocolBody';
import Callout from './Callout';
import QuoteBlock from './QuoteBlock';
import ArabicVerse from './ArabicVerse';
import BookTable from './BookTable';
import MeditationTimer from './MeditationTimer';
import MirrorQuestion from './MirrorQuestion';
import ExerciseBox from './ExerciseBox';
import OrnamentDivider from './OrnamentDivider';
import MunajatTextarea from './MunajatTextarea';

export default function ProtocolJ() {
  return (
    <div>
      <ProtocolHeader
        number="J"
        title="Protocole J : Burnout & Épuisement"
        subtitle="Rallumer la Flamme Intérieure — Quand l'Épuisement Devient un Miroir du Sens Perdu"
      />

      <ProtocolBody>
        {/* Indications */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '0.75rem',
          }}>
            📋 Indications
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}>
            {[
              'Burnout professionnel avec épuisement émotionnel, dépersonnalisation et diminution de l\'accomplissement',
              'Épuisement compassionnel (compassion fatigue) chez les soignants, éducateurs et accompagnants',
              'Fatigue chronique liée au stress prolongé et au surmenage persistant',
              'Syndrome de l\'abandon — sentiment d\'avoir été vidé par autrui sans réciprocité',
              'Charge mentale excessive avec sentiment de ne jamais pouvoir « débrancher »',
              'Perte de sens au travail et questioning existentiel lié à l\'activité professionnelle',
            ].map((item, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: '#E8E4DC',
                lineHeight: 1.6,
              }}>
                <span style={{ color: '#C9A227', fontSize: '0.7rem', flexShrink: 0 }}>◆</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Clinical note callout */}
        <section style={{ marginBottom: '2rem' }}>
          <Callout variant="warning" title="Note clinique — Burnout vs Qabdh">
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong>Distinction cruciale :</strong> Le burnout est un syndrome clinique
              reconnu (OMS, CIM-11), tandis que le Qabdh (قابض) est une contraction
              spirituelle dans la tradition soufie. Les deux peuvent coexister —
              l&apos;épuisement professionnel peut <em>déclencher</em> une sécheresse
              spirituelle, et inversement.
            </p>
            <p style={{ margin: '0.5rem 0 0 0' }}>
              Le thérapeute doit évaluer si le patient présente des signes de dépression
              majeure nécessitant un avis psychiatrique. Ce protocole est complémentaire
              au suivi médical, jamais substitutif.
            </p>
          </Callout>
        </section>

        {/* Objective */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Objectif clinique du Protocole J">
            Accompagner le patient épuisé dans un processus de <em>restauration
            énergétique</em> en utilisant le burnout non pas comme une faille,
            mais comme un <em>miroir</em> révélant ce qui a été sacrifié de l&apos;essentiel.
            Ce protocole ne vise pas à « booster » le patient pour le renvoyer
            au travail, mais à rallumer la flamme intérieure qui donne un
            sens à l&apos;action — ou le courage d&apos;en changer.
          </QuoteBlock>
        </section>

        {/* Duration table */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '0.75rem',
          }}>
            ⏱ Durée du Protocole
          </h3>
          <BookTable
            headers={['Phase', 'Durée', 'Sessions', 'Fréquence']}
            rows={[
              ['Évaluation du spectre d\'épuisement', '1 sem.', '1', 'Hebdomadaire'],
              ['Fana Clinique', '5 min/séance', '2–3', 'Hebdomadaire'],
              ['Tajalli Clinique', '10 min/séance', '3–4', 'Hebdomadaire'],
              ['Munajat Clinique', '10 min/séance', '2–3', 'Hebdomadaire'],
              ['Béance Clinique', '8 min/séance', '1–2', 'Hebdomadaire'],
              ['Intégration & Plan de retour', 'Variable', '1–2', 'Bimensuelle'],
              ['Total estimé', '', '10–16', ''],
            ]}
          />
        </section>

        <OrnamentDivider />

        {/* Key verses */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            📖 Versets Clés
          </h3>

          <ArabicVerse
            arabic="فَإِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا"
            translation="Certes, avec la difficulté vient la facilité. Certes, avec la difficulté vient la facilité."
            reference="Al-Inshirah 94:5-6"
          />

          <ArabicVerse
            arabic="أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَئِنُّ ٱلۡقُلُوبُ"
            translation="N'est-ce pas par le rappel de Dieu que les cœurs s'apaisent ?"
            reference="Ar-Ra'd 13:28"
          />

          <ArabicVerse
            arabic="عَلَى ٱللَّهِ تَوَكَّلۡتُ رَبِّي وَرَبُّكُم"
            translation="Je m'en remets à Dieu, mon Seigneur et le votre."
            reference="Ghafir 40:44"
          />

          <ArabicVerse
            arabic="وَٱلۡعَصۡرِ إِنَّ ٱلۡإِنسَٰنَ لَفِي خُسۡرٍ إِلَّا ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ وَتَوَاصَوۡاْ بِٱلۡحَقِّ وَتَوَاصَوۡاْ بِٱلصَّبۡرِ"
            translation="Par le Temps ! L'homme est certes en perdition, sauf ceux qui croient, accomplissent les bonnes œuvres, se recommandent mutuellement la vérité et se recommandent mutuellement la patience."
            reference="Al-Asr 103:1-3"
          />
        </section>

        <OrnamentDivider />

        {/* Spectre de l'Épuisement Table */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '0.75rem',
          }}>
            🪞 Spectre de l&apos;Épuisement
          </h3>
          <p style={{
            fontSize: '0.9rem',
            lineHeight: 1.7,
            color: '#9B9590',
            marginBottom: '1rem',
            fontStyle: 'italic',
          }}>
            Chaque forme d&apos;épuisement reflète une dimension spirituelle
            que le Tadaburr permet d&apos;éclairer.
          </p>
          <BookTable
            headers={['Type d\'Épuisement', 'Miroir Spirituel', 'Pratique Compagnante', 'Verset Référent']}
            rows={[
              [
                <strong key="prof">Professionnel</strong>,
                <em key="maqsad" style={{ color: '#D4AF37' }}>Maqsad</em>,
                'Méditation sur l\'intention (niyyah)',
                'Al-Inshirah 94:5-6',
              ],
              [
                <strong key="comp">Compassionnel</strong>,
                <em key="rahma" style={{ color: '#D4AF37' }}>Rahma</em>,
                'Dhikr de la Miséricorde divine',
                'Ar-Ra\'d 13:28',
              ],
              [
                <strong key="chron">Chronique</strong>,
                <em key="sabr" style={{ color: '#D4AF37' }}>Sabr</em>,
                'Muraqaba de la résilience',
                'Al-Asr 103:1-3',
              ],
              [
                <strong key="ment">Mental</strong>,
                <em key="tafakkur" style={{ color: '#D4AF37' }}>Tafakkur</em>,
                'Tadabbur sur la charge mentale',
                'Ghafir 40:44',
              ],
              [
                <strong key="sens">Sens perdu</strong>,
                <em key="ikhlas" style={{ color: '#D4AF37' }}>Ikhlāṣ</em>,
                'Munajat de la sincérité',
                'Al-Asr 103:1-3',
              ],
            ]}
          />
        </section>

        <OrnamentDivider />

        {/* PHASE 1: Fana Clinique — L'Épuisement Accueilli */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1rem',
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A227, #8B6914)',
              color: '#0D1117',
              fontWeight: 800,
              fontSize: '0.85rem',
            }}>1</span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>Phase 1 : Fana Clinique</h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>L&apos;Épuisement Accueilli — 5 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le burnout ne survient pas par hasard. Il est le fruit d&apos;une
            accumulation silencieuse — des heures données sans mesure, des
            émotions absorbées sans filtre, un sens progressivement enfoui
            sous le poids des obligations. La société valorise le don de soi
            jusqu&apos;à l&apos;épuisement, puis blame celui qui s&apos;effondre.
          </p>
          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Cette phase est un acte de <em>restauration radicale</em> : pour la
            première fois, le patient est invité à ne rien faire — à accueillir
            son épuisement sans chercher à le réparer immédiatement. Car la
            guérison commence par la reconnaissance : « Je suis épuisé(e).
            Et c&apos;est acceptable. »
          </p>

          <div style={{
            padding: '1.25rem',
            borderRadius: '10px',
            background: 'rgba(33, 45, 58, 0.5)',
            border: '1px solid rgba(201, 162, 39, 0.12)',
            marginBottom: '1rem',
          }}>
            <h4 style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#C9A227',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>Technique : « Le Silence de l&apos;Épuisé »</h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Allongez-vous ou asseyez-vous dans la position la plus confortable possible. Fermez les yeux.',
                'Prenez conscience de chaque zone de tension dans votre corps. Ne cherchez pas à la relâcher — observez-la simplement.',
                'Imaginez que votre épuisement est un invité qui frappe à votre porte. Laissez-le entrer. Offrez-lui un siège.',
                'Dites intérieurement : « Je te reconnais. Tu es là parce que j\'ai donné trop. Et c\'est fini maintenant. »',
                'Respirez dans cette reconnaissance. Laissez les larmes venir si elles le souhaitent — ce sont les larmes du corps qui se libère.',
                'Répétez lentement : « Inna ma\'al usri yusra — Avec la difficulté vient la facilité. »',
              ].map((step, i) => (
                <li key={i} style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: '#E8E4DC',
                  paddingLeft: '0.25rem',
                }}>
                  <span style={{ color: '#C9A227', fontWeight: 700, marginRight: '0.25rem' }}>{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <MeditationTimer id="protJ-phase1" initialSeconds={300} label="Phase 1 — Fana Clinique" />
        </section>

        <OrnamentDivider />

        {/* PHASE 2: Tajalli Clinique — La Flamme Intérieure */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1rem',
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A227, #8B6914)',
              color: '#0D1117',
              fontWeight: 800,
              fontSize: '0.85rem',
            }}>2</span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>Phase 2 : Tajalli Clinique</h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>La Flamme Intérieure — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le Coran enseigne que <em>le cœur trouve le repos dans le rappel de
            Dieu</em> (Ar-Ra&apos;d 13:28). Pour le patient épuisé, ce verset n&apos;est
            pas une promesse abstraite — c&apos;est une <em>physiologie spirituelle</em>.
            Le dhikr, la remémoration, agit comme un régulateur du système
            nerveux : il ralentit le rythme cardiaque, apaise l&apos;amygdale,
            rétablit la cohérence cardiaque.
          </p>
          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Cette phase invite le patient à visualiser une flamme intérieure —
            pas une flamme ardente qui consume, mais une <em>lumière douce</em>,
            comme celle d&apos;une lampe à huile dans une pièce sombre. Cette flamme
            n&apos;a jamais cessé de briller. Elle était simplement recouverte par
            la poussière de l&apos;épuisement.
          </p>

          <MirrorQuestion question="Quand est-ce que j'ai senti pour la dernière fois une joie pure, sans effort, sans performance ? Quelle était cette flamme en moi que le surmenage a recouverte ? Et si cette flamme n'avait jamais disparu — si elle attendait simplement que je la regarde ?" />

          <MeditationTimer id="protJ-phase2" initialSeconds={600} label="Phase 2 — Tajalli Clinique" />
        </section>

        <OrnamentDivider />

        {/* PHASE 3: Munajat Clinique — Le Dialogue du Repos */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1rem',
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A227, #8B6914)',
              color: '#0D1117',
              fontWeight: 800,
              fontSize: '0.85rem',
            }}>3</span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>Phase 3 : Munajat Clinique</h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>Le Dialogue du Repos — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Munajat pour l&apos;épuisé est un dialogue de <em>restitution</em>.
            Le patient a tant donné aux autres — son temps, son énergie, sa
            compassion — qu&apos;il a oublié qu&apos;il pouvait aussi se tourner
            vers Dieu pour <em>recevoir</em>. Cette phase renverse le mouvement :
            le patient ne demande plus rien pour les autres. Il demande pour
            lui-même. Et ce n&apos; pas de l&apos;égoïsme — c&apos;est du
            <em> Tawakkul</em>, la confiance en Celui qui ne s&apos;épuise jamais.
          </p>

          <MunajatTextarea
            protocolName="Protocol J"
            phaseName="Munajat Clinique"
            id="prot-j-phase3"
            placeholder="Parlez à Dieu de votre fatigue — pas pour vous plaindre, mais pour Lui offrir ce que vous portez..."
            prompts={[
              { emoji: '🔥', text: 'Mon Dieu, ma flamme intérieure s\'est éteinte — rallume-la pour moi' },
              { emoji: '🕊️', text: 'Seigneur, j\'ai donné tout aux autres et je n\'ai plus rien — donne-moi de Ta plénitude' },
              { emoji: '🤲', text: 'Ô Toi qui ne t\'épuises jamais, apprends-moi le repos en Toi' },
              { emoji: '💡', text: 'Mon Dieu, montre-moi ce qui a un vrai sens dans ma vie — libère-moi du futile' },
              { emoji: '🌅', text: 'Allah, je remets ma fatigue entre Tes mains — tuqeel nasbi al-\'usr yusra' },
            ]}
          />

          <MeditationTimer id="protJ-phase3" initialSeconds={600} label="Phase 3 — Munajat Clinique" />
        </section>

        <OrnamentDivider />

        {/* PHASE 4: Béance Clinique — Le Nouveau Souffle */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1rem',
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #C9A227, #8B6914)',
              color: '#0D1117',
              fontWeight: 800,
              fontSize: '0.85rem',
            }}>4</span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>Phase 4 : Béance Clinique</h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>Le Nouveau Souffle — 8 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Béance pour l&apos;épuisé est une <em>renaissance douce</em>. Pas un
            retour au monde ancien avec ses cadences toxiques, mais l&apos;ouverture
            à une nouvelle manière d&apos;exister — où le repos est un droit,
            où le sens précède la performance, où la confiance en Dieu
            (Tawakkul) remplace le contrôle anxieux.
          </p>

          <div style={{
            padding: '1.25rem',
            borderRadius: '10px',
            background: 'rgba(46, 139, 87, 0.06)',
            border: '1px solid rgba(46, 139, 87, 0.15)',
            marginBottom: '1rem',
          }}>
            <h4 style={{
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#2E8B57',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>Exercice : « La Promesse du Souffle »</h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.88rem',
              lineHeight: 1.75,
              color: '#E8E4DC',
            }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 1 :</strong> Asseyez-vous
                confortablement. Placez une main sur votre cœur. Sentez les battements —
                c&apos;est votre corps qui dit « je suis là, je vis, je suis suffisant. »
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 2 :</strong> Inspirez
                profondément en comptant jusqu&apos;à 4. Rétenez en comptant jusqu&apos;à 4.
                Expirez en comptant jusqu&apos;à 6. Répétez 7 fois. C&apos;est la respiration
                du repos — l&apos;expiration plus longue que l&apos;inspiration active le
                parasympathique.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 3 :</strong> Formulez intérieurement
                une promesse : « Je promets de me traiter comme je traite ceux que j&apos;aime.
                Mon repos n&apos;est pas de la paresse — c&apos;est de la sagesse. »
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 4 :</strong> Visualisez votre
                nouveau souffle comme un vent doux qui traverse une pièce close. Les fenêtres
                s&apos;ouvrent. La lumière entre. Vous êtes libre de choisir — libre de
                ralentir, libre de dire non, libre de recommencer différemment.
              </p>
              <blockquote style={{
                margin: '0.5rem 0 0 0',
                padding: '0.75rem 1rem',
                borderLeft: '3px solid #2E8B57',
                background: 'rgba(46, 139, 87, 0.06)',
                borderRadius: '0 6px 6px 0',
                fontFamily: '"Amiri", serif',
                fontSize: '1.05rem',
                color: '#D4AF37',
                fontStyle: 'italic',
                lineHeight: 1.7,
              }}>
                « Wa al-asr. Inna al-insana lafi khusr — Par le Temps.
                L&apos;homme est en perdition. Sauf ceux qui croient, font le bien,
                et se recommandent la patience. »
              </blockquote>
            </div>
          </div>

          <MeditationTimer id="protJ-phase4" initialSeconds={480} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Quote from Al-Ghazali */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Abu Hamid Al-Ghazali — Ihya Ulum al-Din">
            Le cœur qui a trop porté finit par se briser. Mais le cœur qui
            se repose en Dieu devient plus fort après la fatigue qu&apos;avant.
            Car le repos véritable n&apos;est pas l&apos;absence d&apos;activité —
            c&apos;est la présence de la Paix. Et la Paix a une Adresse :
            le rappel de Celui qui ne se fatigue jamais.
          </QuoteBlock>
        </section>

        <OrnamentDivider />

        {/* Exercise: Les 21 Jours du Repos Sacré */}
        <section style={{ marginBottom: '2rem' }}>
          <ExerciseBox label="Les 21 Jours du Repos Sacré">
            <p style={{ margin: '0 0 0.75rem 0' }}>
              Un programme progressif de restauration énergétique sur trois semaines.
              Chaque semaine introduit une nouvelle dimension du repos — physique,
              émotionnel, puis spirituel.
            </p>
            <ol style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <strong style={{ color: '#C9A227' }}>Semaine 1 — Repos du Corps (Jours 1-7) :</strong>
                Chaque soir, couchez-vous 30 minutes plus tôt. Avant de dormir, pratiquez
                3 minutes de respiration 4-4-6 (inspirez 4s, retenez 4s, expirez 6s).
                Le matin, ne regardez pas votre téléphone pendant les 20 premières minutes.
                Notez votre niveau d&apos;énergie sur 10 chaque soir.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Semaine 2 — Repos du Cœur (Jours 8-14) :</strong>
                Chaque jour, identifiez une activité qui vous « vide » et une qui vous « nourrit ».
                Réduisez la première de 20%. Augmentez la seconde de 20%. Le soir, écrivez
                une Munajat de 5 lignes adressée à Dieu sur ce que votre cœur porte.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Semaine 3 — Repos de l&apos;Âme (Jours 15-21) :</strong>
                Pratiquez 10 minutes de Muraqaba (méditation silencieuse) chaque matin.
                L&apos;après-midi, prenez 15 minutes de « solitude sacrée » — sans distraction,
                sans téléphone, sans rien faire. Juste être. Le soir, lisez le verset
                Ar-Ra&apos;d 13:28 et méditez sur la Paix qu&apos;il promet.
              </li>
            </ol>
            <p style={{
              margin: '0.75rem 0 0 0',
              fontStyle: 'italic',
              color: '#9B9590',
              fontSize: '0.85rem',
            }}>
              💡 Note : Ce programme ne remplace pas un arrêt maladie prescrit par un médecin.
              Si le burnout est sévère, le repos professionnel complet reste la priorité.
            </p>
          </ExerciseBox>
        </section>
      </ProtocolBody>
    </div>
  );
}
