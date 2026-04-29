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
import MunajatTextarea from './MunajatTextarea';
import ExerciseBox from './ExerciseBox';
import OrnamentDivider from './OrnamentDivider';

export default function ProtocolE() {
  return (
    <div>
      <ProtocolHeader
        number="E"
        title="Protocole E : Estime de Soi"
        subtitle="Le Miroir Intérieur — Restaurer la Dignité de l'Âme"
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
              'Estime de soi profondément altérée et sentiment chronique d\'infériorité',
              'Dialogue intérieur autocritique et tyran intérieur envahissant',
              'Syndrome de l\'imposteur persistant dans les sphères professionnelles ou académiques',
              'Comparaison sociale compulsive et sentiment de ne jamais suffire',
              'Difficulté à recevoir des compliments ou de la reconnaissance',
              'Auto-sabotage répété dès lors que le succès approche',
              'Dépendance affective et besoin constant de validation externe',
              'Honte chronique et sentiment d\'indignité fondamentale',
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
          <Callout variant="info" title="Note clinique — Distinction essentielle">
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong>L&apos;estime de soi dans le cadre islamique</strong> est radicalement
              différente de l&apos;orgueil (kibr). Le Prophète ﷺ a dit :
            </p>
            <blockquote style={{
              margin: '0.5rem 0',
              padding: '0.5rem 1rem',
              borderLeft: '3px solid #00D4FF',
              background: 'rgba(0, 212, 255, 0.04)',
              borderRadius: '0 6px 6px 0',
              fontStyle: 'italic',
              color: '#E8E4DC',
              fontFamily: '"Amiri", serif',
              fontSize: '0.95rem',
            }}>
              « Il y a dans le corps un morceau de chair : s&apos;il est sain,
              tout le corps est sain, et s&apos;il est corrompu, tout le corps
              est corrompu — c&apos;est le cœur. »
            </blockquote>
            <p style={{ margin: '0.5rem 0 0 0' }}>
              L&apos;estime de soi saine vient de la <em>connaissance</em> de sa propre
              valeur aux yeux de Dieu, non de l&apos;évaluation par rapport aux autres.
            </p>
          </Callout>
        </section>

        {/* Objective */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Objectif clinique du Protocole E">
            Restaurer l&apos;image que le patient porte de lui-même en remplaçant
            le miroir déformant de l&apos;autocritique par le miroir lumineux
            de la Fitrah — la nature originelle pure avec laquelle chaque
            être humain a été créé. Ce protocole ne vise pas à gonfler l&apos;ego,
            mais à révéler la vérité de ce que le patient a toujours été :
            une âme digne de respect, portée par la Miséricorde divine.
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
              ['Évaluation de l\'image de soi', '1 sem.', '1', 'Hebdomadaire'],
              ['Fana Clinique', '5 min/séance', '1–2', 'Hebdomadaire'],
              ['Tajalli Clinique', '15 min/séance', '2–3', 'Hebdomadaire'],
              ['Munajat Clinique', '10 min/séance', '2–3', 'Hebdomadaire'],
              ['Béance Clinique', '10 min/séance', '1–2', 'Hebdomadaire'],
              ['Intégration', 'Variable', '1', 'Bimensuelle'],
              ['Total estimé', '', '6–10', ''],
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
            arabic="وَلَقَدۡ كَرَّمۡنَا بَنِيٓ ءَادَمَ وَحَمَلۡنَٰهُمۡ فِي ٱلۡبَرِّ وَٱلۡبَحۡرِ"
            translation="Nous avons certes honoré les enfants d'Adam. Nous les avons portés sur la terre ferme et sur la mer."
            reference="Al-Isra 17:70"
          />

          <ArabicVerse
            arabic="فَأَيۡنَمَا تُوَلُّواْ فَثَمَّ وَجۡهُ ٱللَّهِ"
            translation="Où que vous vous tourniez, là est la Face de Dieu."
            reference="Al-Baqarah 2:115"
          />

          <ArabicVerse
            arabic="وَنَفۡسٖ وَمَا سَوَّٮٰهَا فَأَلۡهَمَهَا فُجُورَهَا وَتَقۡوَٮٰهَا"
            translation="Par l'âme et Celui qui l'a harmonieusement façonnée, puis lui a inspiré son libertinage et sa piété."
            reference="Ash-Shams 91:7-8"
          />
        </section>

        <OrnamentDivider />

        {/* PHASE 1: Fana Clinique */}
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
              }}>Le Lâcher du Tyran Intérieur — 5 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le patient dont l&apos;estime de soi est blessée porte en lui une voix
            critique qui ne cesse de dénigrer, de comparer, de minimiser.
            Cette voix est devenue si familière qu&apos;il ne la distingue plus
            de sa propre pensée. Cette phase est un acte de <em>séparation</em> :
            apprendre à reconnaître que cette voix n&apos;est pas la vérité —
            c&apos;est un programme acquis, pas une identité.
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
            }}>Technique : « Le Silence du Tyran »</h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Asseyez-vous confortablement. Fermez les yeux. Prenez 3 respirations profondes.',
                'Imaginez que votre esprit est une pièce avec deux chaises. Sur l\'une est assis « le Tyran » — cette voix qui vous dévalorise. Sur l\'autre, vous.',
                'Regardez le Tyran avec compassion. Reconnaissez qu\'il a été créé pour vous protéger — probablement dans l\'enfance — mais que sa méthode est devenue toxique.',
                'Dites-lui intérieurement : « Merci pour ta protection. Mais je n\'ai plus besoin de toi comme avant. Je vais apprendre à me parler autrement. »',
                'Imaginez le Tyran qui se lève, qui quitte la pièce doucement. La pièce est maintenant silencieuse. Respirez dans ce silence.',
                'Dans ce silence, répétez lentement : « Je ne suis pas mes pensées. Je suis celui qui les observe. Et celui qui observe est paisible. »',
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

          <MeditationTimer id="protE-phase1" initialSeconds={300} label="Phase 1 — Fana Clinique" />
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
              }}>Le Miroir de la Fitrah — 15 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Fitrah est la nature originelle de l&apos;être humain — cette pureté
            première avec laquelle chaque enfant naît avant que le monde ne
            vienne déposer ses masques. Le Prophète ﷺ a dit : « Tout enfant
            naît sur la Fitrah. » Cette phase invite le patient à se reconnecter
            à cette vérité fondamentale : sa valeur n&apos;est pas à construire,
            elle est à <em>découvrir</em>.
          </p>

          <MirrorQuestion question="Si je devais me voir à travers les yeux de Dieu — avec bienveillance totale, sans jugement — qui est-ce que je verrais ? Quelles qualités en moi ai-je oubliées ou refusé de reconnaître ?" />

          <MeditationTimer id="protE-phase2" initialSeconds={900} label="Phase 2 — Tajalli Clinique" />
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
              }}>Le Dialogue de la Reconnaissance — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Munajat pour l&apos;estime de soi est un dialogue de <em>retour à soi</em>.
            Le patient est invité à parler à Dieu non pas de ses défauts
            (il en a assez fait), mais de sa <em>merveille</em> — car dans
            la tradition islamique, chaque être humain est une ayat, un signe
            de la Création.
          </p>

          <MunajatTextarea
            protocolName="Protocole E : Estime de Soi"
            phaseName="Phase 3 : Munajat Clinique"
            id="protE-munajat"
            prompts={[
              { emoji: '✨', text: 'Seigneur, tu m\'as créé avec dignité...' },
              { emoji: '🪞', text: 'Ma valeur ne dépend pas de...' },
              { emoji: '🕊️', text: 'Je me libère de la honte car...' },
              { emoji: '💛', text: 'En toi je trouve ma véritable identité...' },
              { emoji: '🌟', text: 'Je mérite l\'amour et le respect car...' },
            ]}
          />

          <MeditationTimer id="protE-phase3" initialSeconds={600} label="Phase 3 — Munajat Clinique" />
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
              }}>L&apos;Exercice de l&apos;Honneur Intérieur — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La dernière phase est un acte d&apos;<em>intégration</em> : le patient est
            invité à honorer en lui ce qu&apos;il a découvert pendant le protocole.
            Pas comme un exercice mental, mais comme une cérémonie intérieure —
            un moment sacré où l&apos;âme se reconnaît enfin.
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
            }}>Exercice : « La Lettre d&apos;Honneur »</h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.88rem',
              lineHeight: 1.75,
              color: '#E8E4DC',
            }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 1 :</strong> Écrivez une
                lettre à vous-même — mais pas n&apos;importe quelle lettre. Écrivez comme
                si vous étiez votre propre parent bienveillant, celui que vous auriez
                aimé avoir.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 2 :</strong> Dans cette lettre,
                nommez au moins 5 qualités que vous possédez — des qualités réelles,
                pas des compliments vides. Des moments où vous avez été courageux,
                tendre, généreux, patient.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 3 :</strong> Lisez cette lettre
                à voix haute. Si des larmes viennent, laissez-les couler — ce sont
                les larmes de l&apos;âme qui se reconnaît enfin.
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
                « Bismillah. Je t&apos;ai créé par Ma Main et J&apos;ai insufflé en toi
                de Mon Esprit. Tu n&apos;es pas une erreur. Tu es un miracle
                que le monde n&apos;a pas encore appris à voir. »
              </blockquote>
            </div>
          </div>

          <MeditationTimer id="protE-phase4" initialSeconds={600} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Post-session exercise */}
        <section style={{ marginBottom: '2rem' }}>
          <ExerciseBox label="Exercice Post-Séance — Le Miroir Quotidien">
            <p style={{ margin: '0 0 0.75rem 0' }}>
              Chaque matin pendant 21 jours, pratiquez ce rituel simple :
            </p>
            <ol style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <strong style={{ color: '#C9A227' }}>Au réveil (1 min) :</strong>
                Regardez-vous dans le miroir. Dites à voix haute : « Je suis créé(e)
                avec bienveillance. Ma valeur ne dépend de personne d&apos;autre que de Dieu. »
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Dans la journée :</strong>
                Chaque fois que la voix critique se manifeste, notez-la.
                Puis demandez : « Est-ce que je dirais ça à quelqu&apos;un que j&apos;aime ? »
                Si non, ne le dites pas à vous-même non plus.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Le soir (3 min) :</strong>
                Notez une chose que vous avez bien faite aujourd&apos;hui — même minime.
                Un sourire offert, une patience gardée, un moment de gentillesse.
                La dignité se construit dans les petites pierres.
              </li>
            </ol>
          </ExerciseBox>
        </section>
      </ProtocolBody>
    </div>
  );
}
