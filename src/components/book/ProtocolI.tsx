'use client';

import React from 'react';
import ProtocolHeader from './ProtocolHeader';
import ProtocolBody from './ProtocolBody';
import QuoteBlock from './QuoteBlock';
import ArabicVerse from './ArabicVerse';
import BookTable from './BookTable';
import MeditationTimer from './MeditationTimer';
import MirrorQuestion from './MirrorQuestion';
import ExerciseBox from './ExerciseBox';
import OrnamentDivider from './OrnamentDivider';
import MunajatTextarea from './MunajatTextarea';

export default function ProtocolI() {
  return (
    <div>
      <ProtocolHeader
        number="I"
        title="Protocole I : Addictions & Dépendances"
        subtitle="Retrouver la Liberté Intérieure — Quand la Dépendance Devient un Miroir du Vide Spirituel"
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
              'Addiction aux substances — alcool, drogues illicites, médicaments psychotropes, tabac',
              'Addiction comportementale — jeux de hasard, écrans, réseaux sociaux, pornographie, achats compulsifs',
              'Troubles alimentaires compulsifs — hyperphagie boulimique, binge eating, restrictions draconiennes',
              'Dépendance affective — besoin vital de l\'approbation d\'autrui, incapacité à rester seul',
              'Co-dépendance — sacrifice de soi pour maintenir une relation toxique, confusion entre amour et contrôle',
              'Addictions en rémission ou en rechute — stabilisation, prévention de la rechute, reconstruction identitaire',
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

        {/* Objective */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Objectif clinique du Protocole I">
            L&apos;addiction n&apos;est pas un vice — c&apos;est un <em>cri du vide</em>.
            Derrière chaque dépendance se cache une soif spirituelle que la
            substance, le comportement ou la relation a tenté d&apos;étancher.
            Ce protocole ne remplace pas le sevrage médical ni l&apos;accompagnement
            addictologique, mais il offre au patient un <em>miroir spirituel</em> pour
            comprendre la racine de sa dépendance et retrouver, dans la connexion
            au Divin, la liberté que l&apos;addiction lui a volée.
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
              ['Évaluation du profil addictif', '1–2 sem.', '1–2', 'Hebdomadaire'],
              ['Fana Clinique', '5 min/séance', '2–3', 'Hebdomadaire'],
              ['Tajalli Clinique', '10 min/séance', '3–5', 'Hebdomadaire'],
              ['Munajat Clinique', '10 min/séance', '3–5', 'Hebdomadaire'],
              ['Béance Clinique', '8 min/séance', '2–3', 'Hebdomadaire'],
              ['Intégration', 'Variable', '1–2', 'Bimensuelle'],
              ['Total estimé', '', '12–20', 'Pathologies lourdes'],
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
            arabic="يَٰبَنِيٓ ءَادَمَ خُذُواْ زِينَتَكُمۡ عِندَ كُلِّ مَسۡجِدٖ وَكُلُواْ وَٱشۡرَبُواْ وَلَا تُسۡرِفُوٓاْ"
            translation="Ô enfants d'Adam ! Dans chaque lieu de prière, portez votre parure (beauté). Mangez et buvez, mais ne commettez pas d'excès."
            reference="Al-A'raf 7:31"
          />

          <ArabicVerse
            arabic="فَإِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا"
            translation="Certes, avec la difficulté vient la facilité. Certes, avec la difficulté vient la facilité."
            reference="Ash-Sharh 94:5-6"
          />

          <ArabicVerse
            arabic="لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡ"
            translation="Dieu n'impose à aucune âme une charge supérieure à sa capacité."
            reference="Al-Baqarah 2:286"
          />

          <ArabicVerse
            arabic="وَلَا تَيۡـَٔسُوٓاْ مِن رَّوۡحِ ٱللَّهِ إِنَّهُۥ لَا يَيۡـَٔسُ مِن رَّوۡحِ ٱللَّهِ إِلَّا ٱلۡقَوۡمُ ٱلۡكَٰفِرُونَ"
            translation="Ne désespérez pas de la miséricorde de Dieu. En vérité, ne désespère de la miséricorde de Dieu que le peuple mécréant."
            reference="Yusuf 12:87"
          />
        </section>

        <OrnamentDivider />

        {/* Dependency spectrum table */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '0.75rem',
          }}>
            🌿 Spectre des Dépendances
          </h3>
          <BookTable
            headers={['Type de Dépendance', 'Miroir Spirituel', 'Verset Référent', 'Pratique Compagnante']}
            rows={[
              [
                'Substance (alcool, drogues)',
                'Tawba (Repentir)',
                'Al-A\'raf 7:31',
                'Sevrage graduel accompagné de dhikr, invocation du pardon divin à chaque envie',
              ],
              [
                'Comportementale (jeux, écrans)',
                'Murāqaba (Surveillance de soi)',
                'Ash-Sharh 94:5-6',
                'Pratique de l\'attention pleine consciente sur les déclencheurs, surveillance des pensées',
              ],
              [
                'Affective (besoin de validation)',
                'Tawakkul (Confiance en Dieu)',
                'Al-Baqarah 2:286',
                'Transfert progressif de la dépendance à autrui vers la confiance en la Providence divine',
              ],
              [
                'Co-dépendance',
                'Hurma (Sainteté des limites)',
                'Yusuf 12:87',
                'Apprentissage de la frontière saine — dire non sans culpabilité, se séparer sans se perdre',
              ],
              [
                'Compulsive (alimentaire, achats)',
                'Sabr (Patience patiente)',
                'Al-Baqarah 2:286',
                'Retraint progressive des impulsions par la méditation et le jeûne spirituel du cœur',
              ],
            ]}
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
              }}>Le Vide Reconnu — 5 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La dépendance est un <em>filler</em> — une substance que l&apos;on injecte
            dans le vide spirituel pour en atténuer la douleur. Alcool, écrans,
            nourriture, approbation — tout cela n&apos;est que du plâtre posé sur
            une fracture de l&apos;âme. Cette phase invite le patient à retirer
            le plâtre, non pas pour souffrir, mais pour <em>regarder</em> la fracture
            en face — car c&apos;est seulement en voyant le vide qu&apos;on peut
            commencer à le combler par ce qui est véritable.
          </p>

          <ArabicVerse
            arabic="يَٰبَنِيٓ ءَادَمَ خُذُواْ زِينَتَكُمۡ عِندَ كُلِّ مَسۡجِدٖ وَكُلُواْ وَٱشۡرَبُواْ وَلَا تُسۡرِفُوآاْ"
            translation="Ô enfants d'Adam ! Portez votre parure en chaque lieu de prière. Mangez et buvez, mais ne commettez pas d'excès."
            reference="Al-A'raf 7:31"
          />

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
            }}>Technique : « Le Miroir du Vide »</h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Asseyez-vous confortablement. Fermez les yeux. Prenez 3 respirations profondes — inspirez (4 sec), retenez (2 sec), expirez (6 sec).',
                'Imaginez que devant vous se trouve un miroir. Dans ce miroir, vous vous voyez tel que vous êtes — sans le masque de la dépendance. Regardez votre visage avec douceur, sans jugement.',
                'Derrière votre reflet, dans le miroir, un vide apparaît — pas un vide effrayant, mais un espace. Cet espace est la soif que votre addiction a essayé de combler.',
                'Nommez ce vide intérieurement : « C\'est la soif de... » Complétez avec ce qui vient naturellement — sécurité, amour, sens, paix, connexion.',
                'Respirez dans ce vide. Ne cherchez pas à le remplir tout de suite. Contentez-vous de le reconnaître, de l\'accueillir. Le premier pas vers la liberté est de dire : « Je vois ce vide, et il ne me définit pas. »',
                'Prenez une inspiration profonde et ouvrez doucement les yeux en gardant avec vous cette reconnaissance lucide.',
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

          <MeditationTimer id="protI-phase1" initialSeconds={300} label="Phase 1 — Fana Clinique" />
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
              }}>La Lumière de la Volonté — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le Coran répète deux fois : « Certes, avec la difficulté vient la
            facilité. » (Ash-Sharh 94:5-6) — cette répétition n&apos;est pas un
            hasard stylistique, c&apos;est une <em>promesse divine</em>. La volonté
            du patient n&apos;a pas besoin d&apos;être parfaite ni inébranlable — elle
            a besoin d&apos;être connectée à une Source plus grande que sa propre
            fatigue. Cette phase enseigne que la véritable force ne vient pas
            du moi willpower, mais du lien avec le Divin.
          </p>

          <ArabicVerse
            arabic="فَإِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا"
            translation="Certes, avec la difficulté vient la facilité. Certes, avec la difficulté vient la facilité."
            reference="Ash-Sharh 94:5-6"
          />

          <MirrorQuestion question="Quand je ressens l'envie de céder à ma dépendance, qu'est-ce que mon corps cherche vraiment ? Quelle est la soif cachée derrière cette pulsion — et comment pourrais-je la désaltérer par autre chose que par la substance ou le comportement ?" />

          <div style={{
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            background: 'rgba(0, 212, 255, 0.04)',
            border: '1px solid rgba(0, 212, 255, 0.1)',
            margin: '1rem 0',
          }}>
            <p style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#00D4FF',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              Exemples de réponses possibles
            </p>
            <ul style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}>
              {[
                '« Mon corps cherche l\'apaisement — mais l\'alcool ne fait que numérer la douleur sans la guérir. »',
                '« Quand je scroll compulsivement, je cherche en réalité une connexion que les écrans ne peuvent pas donner. »',
                '« La nourriture me donne un confort temporaire, mais ma vraie faim est celle du sens et de la présence. »',
                '« Mon addiction est un signal : mon âme a soif de quelque chose de plus grand que moi. »',
              ].map((ex, i) => (
                <li key={i} style={{
                  fontSize: '0.85rem',
                  lineHeight: 1.65,
                  color: '#E8E4DC',
                  fontStyle: 'italic',
                }}>
                  {ex}
                </li>
              ))}
            </ul>
          </div>

          <MeditationTimer id="protI-phase2" initialSeconds={600} label="Phase 2 — Tajalli Clinique" />
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
              }}>Dialogue avec le Guérisseur — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Dieu est <em>Ash-Shafi</em> — le Guérisseur. Non pas un guérisseur
            parmi d&apos;autres, mais Celui qui guérit ce que la médecine humaine
            ne peut atteindre : l&apos;âme blessée qui se perd dans ses propres
            pièges. La Munajat pour l&apos;addiction est un cri de libération —
            un dialogue où le patient avoue sa faiblesse non pas pour s&apos;en
            humilier, mais pour ouvrir la porte à une force qui ne lui
            appartient pas mais qui lui est offerte.
          </p>

          <ArabicVerse
            arabic="لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَا"
            translation="Dieu n'impose à aucune âme une charge supérieure à sa capacité."
            reference="Al-Baqarah 2:286"
          />

          <MunajatTextarea
            protocolName="Protocol I"
            phaseName="Munajat Clinique"
            id="prot-i-phase3"
            placeholder="Ici, votre addiction se transforme en prière — parlez au Guérisseur de ce que votre âme porte..."
            prompts={[
              { emoji: '🙏', text: 'Seigneur, libère-moi de cette chaîne que je ne peux briser seul(e)...' },
              { emoji: '💎', text: 'Ô Ash-Shafi, Guérisseur des cœurs — guéris la blessure que je compense par ma dépendance' },
              { emoji: '💫', text: 'Mon Dieu, je reconnais ma faiblesse et c\'est dans cette faiblesse que je cherche Ta force' },
              { emoji: '🕊️', text: 'Ô Toi qui as dit « avec la difficulté vient la facilité » — fais que je crois en cette promesse aujourd\'hui' },
              { emoji: '🤲', text: 'Seigneur, remplis le vide de mon âme par Ta Présence — que je n\'aie plus besoin de le remplir par autre chose' },
              { emoji: '🌅', text: 'Ô Toi qui ne désespère de personne — ne laisse pas mon âme désespérer d\'elle-même' },
            ]}
          />

          <MeditationTimer id="protI-phase3" initialSeconds={600} label="Phase 3 — Munajat Clinique" />
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
              }}>L&apos;Ouverture à la Liberté — 8 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La liberté n&apos;est pas l&apos;absence de désir — c&apos;est la capacité à
            choisir. Yusuf (Joseph) ﷺ a dit : « Ne désespérez pas de
            la miséricorde de Dieu. » (Yusuf 12:87) — après avoir été
            jeté dans un puits, vendu comme esclave, calomnié et emprisonné,
            il n&apos;a jamais cessé de croire que la liberté était possible.
            Cette phase est un acte de <em>libération intérieure</em> : le patient
            n&apos;est plus défini par sa dépendance mais par sa capacité à revenir.
          </p>

          <ArabicVerse
            arabic="وَلَا تَيۡـَٔسُوٓاْ مِن رَّوۡحِ ٱللَّهِ إِنَّهُۥ لَا يَيۡـَٔسُ مِن رَّوۡحِ ٱللَّهِ إِلَّا ٱلۡقَوۡمُ ٱلۡكَٰفِرُونَ"
            translation="Ne désespérez pas de la miséricorde de Dieu. En vérité, ne désespère de la miséricorde de Dieu que le peuple mécréant."
            reference="Yusuf 12:87"
          />

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
            }}>Exercice : « La Serment de Libération »</h4>
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
                dans votre espace de méditation. Placez vos mains sur votre cœur.
                Sentez les battements de votre cœur — ce cœur qui a survécu à
                chaque rechute, chaque crise, chaque moment de désespoir.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 2 :</strong> Répétez
                lentement, à voix haute si possible : « Je ne suis pas ma dépendance.
                Je suis une âme créée par Dieu, et Dieu ne crée rien de futile.
                Mon âme a soif de Lui, et c&apos;est cette soif qui me fera vivre,
                pas me détruire. »
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 3 :</strong> Visualisez
                la chaîne de votre dépendance. Imaginez qu&apos;elle se dissolve dans
                une lumière dorée — chaque maillon qui tombe est une promesse
                que vous vous faites. Pas de perfection, mais de progression.
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
                « La rechute n&apos;est pas un échec — c&apos;un enseignement.
                Celui qui tombe sept fois et se relève huit fois est plus
                fort que celui qui n&apos;est jamais tombé. »
              </blockquote>
            </div>
          </div>

          <MeditationTimer id="protI-phase4" initialSeconds={480} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Quote Block */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Al-Ghazali — Ihyāʾ ʿulūm al-dīn">
            L&apos;âme a soif de Dieu comme le corps a soif d&apos;eau.
            Mais l&apos;homme aveugle par son ignorance boit de l&apos;eau
            de mer et s&apos;étonne d&apos;avoir encore soif. Chaque addiction
            est un acte de soif mal orientée — le remède n&apos;est pas
            de supprimer la soif (ce qui est impossible), mais de tourner
            le regard vers la Source véritable. Car celui qui a goûté
            à la douceur de la proximité divine ne cherche plus
            l&apos;amertume des illusions.
          </QuoteBlock>
        </section>

        <OrnamentDivider />

        {/* Post-session exercise */}
        <section style={{ marginBottom: '2rem' }}>
          <ExerciseBox label="Exercice Post-Séance — Les 30 Jours du Jeûne du Cœur">
            <p style={{ margin: '0 0 0.75rem 0' }}>
              Ce programme progressif de 30 jours accompagne la libération
              spirituelle de l&apos;addiction. Il ne s&apos;agit pas d&apos;un sevrage
              médical, mais d&apos;un <em>détox spirituel</em> — un nettoyage
              intérieur qui renforce la motivation et la connexion au Divin :
            </p>
            <ol style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <strong style={{ color: '#C9A227' }}>Jours 1–7 — La Reconnaissance (3 min/jour) :</strong>
                Chaque matin, notez dans votre journal : « Aujourd&apos;hui, ma dépendance
                essaie de me faire croire que... » — puis complétez avec le mensonge
                que l&apos;addiction vous chuchote. L&apos;objectif est de démystifier la
                voix addictive en la mettant en lumière.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Jours 8–14 — Le Remplacement (5 min/jour) :</strong>
                Chaque fois que l&apos;envie se manifeste, pratiquez le « DHK » :
                <strong>D</strong>étecter le déclencheur (émotion, situation, pensée),
                <strong>H</strong>onorer la sensation sans céder, puis
                <strong>K</strong>onner la vraie soif derrière l&apos;envie. Replacez
                l&apos;acte addictif par 2 minutes de dhikr (répétition du nom de Dieu).
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Jours 15–21 — La Reconstruction (10 min/jour) :</strong>
                Identifiez 3 activités non addictives qui vous procurent de la joie
                (marche, lecture, cuisine, prière, musique, dessin). Engagez-vous
                à pratiquer au moins une de ces activités chaque jour. La reconstruction
                identitaire passe par la découverte de plaisirs authentiques.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Jours 22–30 — La Liberté Intérieure (15 min/jour) :</strong>
                Pratiquez une méditation complète du Protocole I chaque jour.
                Le soir, écrivez une lettre de gratitude à votre âme pour chaque
                jour sans cession. La gratitude renforce les circuits neuronaux
                de la récompense naturelle et déplace le centre de satisfaction.
              </li>
            </ol>
            <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.85rem', color: '#9B9590', fontStyle: 'italic' }}>
              💡 Note au praticien : Ce protocole est un <strong>complément spirituel</strong> au
              suivi addictologique et ne remplace ni le sevrage médical, ni la thérapie
              cognitivo-comportementale, ni les groupes de soutien type Narcotiques Anonymes.
              Il peut être utilisé en parallèle pour enrichir la dimension spirituelle
              de la guérison. En cas de sevrage physique (alcool, benzodiazépines), assurez
              une coordination médicale préalable.
            </p>
          </ExerciseBox>
        </section>
      </ProtocolBody>
    </div>
  );
}
