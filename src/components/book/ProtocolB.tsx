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
import PromptChips from './PromptChips';
import ExerciseBox from './ExerciseBox';
import OrnamentDivider from './OrnamentDivider';

export default function ProtocolB() {
  return (
    <div>
      <ProtocolHeader
        number="B"
        title="Protocole B : Anxiété / Panique"
        subtitle="La Présence Divine Contre l'Agitation"
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
              'Trouble Anxieux Généralisé (TAG)',
              'Attaques de panique récurrentes',
              'Anxiété sociale et phobies spécifiques',
              'Anxiété de performance et perfectionnisme pathologique',
              'Hypochondrie et anxiété liée à la santé',
              'Troubles obsessionnels compulsifs (TOC) légers à modérés',
              'Inquiétudes chroniques et rumination anxieuse',
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

        {/* Warning callout */}
        <section style={{ marginBottom: '2rem' }}>
          <Callout variant="warning" title="Attention — Gestion de la panique aiguë">
            <p style={{ margin: '0 0 0.5rem 0' }}>
              En cas de crise de panique <strong>pendant la séance</strong>, interrompez
              immédiatement le protocole et appliquez la procédure d&apos;ancrage
              d&apos;urgence :
            </p>
            <ol style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li>Maintenez le contact visuel avec le patient — parlez d&apos;une voix calme et posée</li>
              <li>Guidez la respiration : inspirez 4 secondes, expirez 8 secondes (rythme apaisant)</li>
              <li>Ancrez par les 5 sens : « Nommez 5 choses que vous voyez, 4 que vous touchez... »</li>
              <li>Répétez ensemble : « Je suis ici. Je suis en sécurité. La Présence divine m&apos;entoure. »</li>
            </ol>
          </Callout>
        </section>

        {/* Objective */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Objectif clinique du Protocole B">
            Ramener le patient du futur anxieux vers la présence immédiate.
            L&apos;anxiété est une projection de la peur dans un avenir incertain ;
            la méditation thérapeutique islamique enseigne que la seule réalité
            est l&apos;instant présent, et que cet instant est soutenu par la
            Présence divine qui ne manque jamais.
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
              ['Évaluation anxieuse', '1 sem.', '1', 'Hebdomadaire'],
              ['Fana Apaisant', '5 min/séance', '2–3', 'Hebdomadaire'],
              ['Tajalli Clinique', '15 min/séance', '3–4', 'Hebdomadaire'],
              ['Munajat Clinique', '10 min/séance', '2–3', 'Hebdomadaire'],
              ['Béance Clinique', '5 min/séance', '1–2', 'Hebdomadaire'],
              ['Intégration', 'Variable', '1', 'Bimensuelle'],
              ['Total estimé', '', '8–12', ''],
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
            arabic="أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَئِنُّ ٱلۡقُلُوبُ"
            translation="N'est-ce pas par le rappel de Dieu que les cœurs s'apaisent ?"
            reference="Ar-Ra'd 13:28"
          />

          <ArabicVerse
            arabic="وَمَن يَتَوَكَّلۡ عَلَى ٱللَّهِ فَهُوَ حَسۡبُهُ"
            translation="Et quiconque place sa confiance en Dieu, Il lui suffit."
            reference="At-Talaq 65:3"
          />

          <ArabicVerse
            arabic="قُل لَّن يُصِيبَنَآ إِلَّا مَا كَتَبَ ٱللَّهُ لَنَا هُوَ مَوۡلَٰنَاۚ وَعَلَى ٱللَّهِ فَلۡيَتَوَكَّلِ ٱلۡمُؤۡمِنُونَ"
            translation="Dis : « Rien ne nous atteindra en dehors de ce que Dieu a prescrit pour nous. Il est notre Maître. C'est en Dieu que les croyants doivent placer leur confiance. »"
            reference="At-Tawbah 9:51"
          />

          <ArabicVerse
            arabic="فَإِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا ﴿٥﴾ إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا"
            translation="Certes, avec la difficulté vient la facilité. Certes, avec la difficulté vient la facilité."
            reference="Ash-Sharh 94:5-6"
          />
        </section>

        <OrnamentDivider />

        {/* PHASE 1: Fana Apaisant */}
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
            }}>
              1
            </span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>
                Phase 1 : Fana Apaisant
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>
                La Respiration du Nom — 5 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le cœur anxieux est un cœur qui a oublié le Présent. Il court
            vers un futur imaginaire peuplé de catastrophes. Cette technique
            utilise le Nom divin « As-Salam » (Le Pacifique / La Paix) comme
            ancre respiratoire. Chaque souffle devient un rappel que la paix
            est accessible ici et maintenant.
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
            }}>
              Technique : « La Respiration du Nom »
            </h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Installez-vous confortablement. Posez une main sur votre poitrine, l\'autre sur votre ventre. Fermez les yeux.',
                'Sur l\'inspiration, prononcez intérieurement et doucement : « Ya Salam... » — ressentez la syllabe « Ya » monter depuis le ventre vers la poitrine, et « Salam » s\'étendre dans tout le corps.',
                'Sur l\'expiration, visualisez la paix comme une lumière bleu-cyan qui irrigue chaque cellule de votre corps, depuis la tête jusqu\'aux pieds.',
                'Quand les pensées anxieuses surgissent (et elles le feront), ne les combattez pas. Dites simplement : « Je te vois, pensée anxieuse, mais maintenant je choisis de revenir à la Paix. » Puis reprenez la respiration du Nom.',
                'Après quelques cycles, observez : votre respiration s\'est-elle ralentie ? Votre poitrine s\'est-elle relâchée ? La tension dans vos épaules a-t-elle diminué ? C\'est le début du retour à la Présence.',
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

          <MeditationTimer id="protB-phase1" initialSeconds={300} label="Phase 1 — Fana Apaisant" />
        </section>

        <OrnamentDivider />

        {/* PHASE 2: Tajalli Clinique */}
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
            }}>
              2
            </span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>
                Phase 2 : Tajalli Clinique
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>
                Le Miroir de l&apos;Anxiété — 15 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Dans cette phase, le patient est invité à contempler son anxiété
            non pas comme un ennemi à combattre, mais comme un messager.
            L&apos;anxiété parle une langue que le miroir peut décoder :
            elle révèle souvent un besoin profond de contrôle, une méfiance
            envers l&apos;avenir, ou un attachement excessif à un outcome particulier.
          </p>

          <MirrorQuestion question="Si mon anxiété était un messager venu me parler, que me dirait-elle ? Quelle vérité essaie-t-elle de me révéler que je refuse d'entendre ? Quelle confiance me demande-t-elle de cultiver ?" />

          <h4 style={{
            fontSize: '0.88rem',
            fontWeight: 700,
            color: '#C9A227',
            margin: '1.25rem 0 0.75rem 0',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            Tableau d&apos;Analyse des Symptômes Anxieux
          </h4>

          <BookTable
            headers={['Type d\'anxiété', 'Manifestation', 'Message du Miroir', 'Réponse Spirituelle']}
            rows={[
              [
                'Anxiété de performance',
                'Peur de l\'échec, perfectionnisme, procrastination',
                '« Tu attaches ta valeur à tes résultats, pas à ton essence. »',
                'Tawakkul : remettre l\'issue à Dieu tout en faisant de son mieux',
              ],
              [
                'Anxiété sociale',
                'Peur du jugement, évitement, rumination post-interaction',
                '« Tu cherches l\'approbation humaine au lieu de la Satisfaction divine. »',
                'Le regard de Dieu est plus doux que tout regard humain',
              ],
              [
                'Anxiété sanitaire',
                'Inquiétudes corporelles, recherches médicales compulsives',
                '« Tu oublies que ton corps est un amana (dépôt sacré) entre les Mains du Guérisseur. »',
                'Ash-Shafi : Dieu est le Guérisseur suprême',
              ],
              [
                'Attaques de panique',
                'Palpitations, essoufflement, détachement de la réalité',
                '« Ton corps crie ce que ta bouche n\'ose pas dire. »',
                'Retour immédiat à la respiration du Nom et à la Présence',
              ],
              [
                'Rumination anxieuse',
                'Pensées répétitives, scénarios catastrophes, insomnie',
                '« Tu vis dans un futur qui n\'existe pas. Reviens. »',
                'Hasbunallahu wa ni\'mal wakil — Dieu nous suffit',
              ],
            ]}
          />

          <MeditationTimer id="protB-phase2" initialSeconds={900} label="Phase 2 — Tajalli Clinique" />
        </section>

        <OrnamentDivider />

        {/* PHASE 3: Munajat Clinique */}
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
            }}>
              3
            </span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>
                Phase 3 : Munajat Clinique
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>
                Le Dialogue de Confiance — 10 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Munajat pour le patient anxieux est un acte de <em>remise</em> —
            déposer ses fardeaux entre les Mains divines. L&apos;anxieux porte trop
            de poids sur ses épaules ; cette phase lui apprend à les confier
            avec sincérité et à expérimenter le soulagement qui suit l&apos;abandon.
          </p>

          <div style={{
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            background: 'rgba(201, 162, 39, 0.04)',
            border: '1px solid rgba(201, 162, 39, 0.1)',
            marginBottom: '1rem',
          }}>
            <p style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#C9A227',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Exemple de dialogue de Munajat
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              <div>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#00D4FF',
                  margin: 0,
                  fontWeight: 600,
                }}>
                  ✦ Le cœur parle :
                </p>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#E8E4DC',
                  fontStyle: 'italic',
                  margin: '0.25rem 0 0 0',
                  lineHeight: 1.7,
                }}>
                  « Mon Dieu, mon cœur ne cesse de courir. Il court vers demain,
                  vers après-demain, et chaque pas est une angoisse. Je suis fatigué
                  de cette course. Je veux m&apos;arrêter mais je ne sais pas comment. »
                </p>
              </div>
              <div>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#D4AF37',
                  margin: 0,
                  fontWeight: 600,
                }}>
                  ✦ La réponse du Miroir :
                </p>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#E8E4DC',
                  fontStyle: 'italic',
                  margin: '0.25rem 0 0 0',
                  lineHeight: 1.7,
                }}>
                  « Arrête-toi. Respire. Tu cours vers quelque chose que Je gère déjà.
                  N&apos;as-tu pas lu : « Est-ce que Celui qui a créé entend comme celui qui n&apos;a pas créé ? » (Al-Mulk 67:14).
                  Repose ton front. Je suis As-Salam — la Paix. Et la Paix ne se trouve
                  qu&apos;en restant présent. »
                </p>
              </div>
            </div>
          </div>

          <p style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#C9A227',
            marginBottom: '0.5rem',
          }}>
            Prompts pour votre Munajat :
          </p>

          <PromptChips prompts={[
            { emoji: '🌊', text: 'Seigneur, apaise les vagues de mon cœur' },
            { emoji: '🤲', text: 'Je dépose entre Tes Mains toutes mes inquiétudes' },
            { emoji: '🕊️', text: 'Apprends-moi la confiance en Toi' },
            { emoji: '💫', text: 'Mon Dieu, je sais que Tu vois ce que je ne vois pas' },
            { emoji: '🌙', text: 'Que Ta Paix descende sur moi comme la nuit sur la terre' },
          ]} />

          <div style={{ marginTop: '1rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#9B9590',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Votre dialogue intime (journal de Munajat) :
            </label>
            <textarea
              placeholder="Écrivez votre Munajat — confiez à Dieu ce que votre cœur porte de trop lourd..."
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '1rem',
                borderRadius: '10px',
                border: '1px solid rgba(201, 162, 39, 0.15)',
                background: 'rgba(13, 17, 23, 0.6)',
                color: '#E8E4DC',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                resize: 'vertical',
                fontFamily: 'inherit',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <MeditationTimer id="protB-phase3" initialSeconds={600} label="Phase 3 — Munajat Clinique" />
        </section>

        <OrnamentDivider />

        {/* PHASE 4: Béance Clinique */}
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
            }}>
              4
            </span>
            <div>
              <h3 style={{
                fontFamily: '"Amiri", serif',
                fontSize: '1.15rem',
                color: '#D4AF37',
                margin: 0,
              }}>
                Phase 4 : Béance Clinique
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>
                L&apos;Ancrage dans la Présence — 5 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Béance pour le patient anxieux est un exercice d&apos;ancrage radical.
            Après avoir exploré l&apos;anxiété (Tajalli) et dialogué avec le Divin (Munajat),
            le patient est ramené au seul moment qui existe : <em>maintenant</em>.
            L&apos;anxiété vit dans le futur ; la Paix vit dans le présent.
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
            }}>
              Exercice d&apos;Ancrage par les 5 Sens
            </h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              {[
                'Vue : Nommez 5 choses que vous voyez autour de vous en ce moment.',
                'Toucher : Touchez 4 surfaces différentes. Décrivez leur texture, température.',
                'Ouïe : Identifiez 3 sons distincts — proches et lointains.',
                'Odorat : Repérez 2 odeurs, même subtiles.',
                'Goût : Prenez 1 gorgée d\'eau lentement. Sentez chaque partie de votre langue.',
              ].map((step, i) => (
                <li key={i} style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: '#E8E4DC',
                }}>
                  <span style={{ color: '#2E8B57', fontWeight: 700 }}>{i + 1}.</span> {step}
                </li>
              ))}
            </ol>
            <p style={{
              margin: '0.75rem 0 0 0',
              fontSize: '0.85rem',
              color: '#9B9590',
              fontStyle: 'italic',
            }}>
              Terminez en disant intérieurement : « Je suis ici. Je suis vivant.
              Dieu est avec moi, ici et maintenant. »
            </p>
          </div>

          <MeditationTimer id="protB-phase4" initialSeconds={300} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Crisis audio script */}
        <section style={{ marginBottom: '2rem' }}>
          <Callout variant="info" title="Script Audio de Gestion de Crise — À enregistrer">
            <p style={{ margin: '0 0 0.75rem 0', lineHeight: 1.7 }}>
              <strong>Voix calme, lente, douce :</strong>
            </p>
            <p style={{ margin: '0 0 0.5rem 0', lineHeight: 1.7, fontStyle: 'italic' }}>
              « Bonjour. Tu es en sécurité. Ce que tu ressens est une réaction de ton corps,
              pas la réalité. Ton cœur bat vite parce qu&apos;il essaie de te protéger,
              mais tu n&apos;as pas besoin d&apos;être protégé en ce moment. Tu es ici, dans cette pièce,
              et rien ne peut te faire de mal.
            </p>
            <p style={{ margin: '0 0 0.5rem 0', lineHeight: 1.7, fontStyle: 'italic' }}>
              Maintenant, inspire lentement par le nez — 1, 2, 3, 4.
              Et expire encore plus lentement — 1, 2, 3, 4, 5, 6.
              Encore une fois. Inspire — 1, 2, 3, 4. Expire — 1, 2, 3, 4, 5, 6.
            </p>
            <p style={{ margin: '0 0 0.5rem 0', lineHeight: 1.7, fontStyle: 'italic' }}>
              Répète avec moi : « Ya Salam — Ô Source de Paix. »
              Ressens cette Paix descendre en toi comme une pluie douce sur un sol assoiffé.
            </p>
            <p style={{ margin: 0, lineHeight: 1.7, fontStyle: 'italic' }}>
              Tu es en sécurité. Dieu est avec toi. Cette crise va passer.
              Elle passe déjà. Reste avec moi. Reste dans la respiration. »
            </p>
          </Callout>
        </section>
      </ProtocolBody>
    </div>
  );
}
