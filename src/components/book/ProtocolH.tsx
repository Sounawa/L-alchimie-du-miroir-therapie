'use client';

import React from 'react';
import ProtocolHeader from './ProtocolHeader';
import ProtocolBody from './ProtocolBody';
import QuoteBlock from './QuoteBlock';
import ArabicVerse from './ArabicVerse';
import BookTable from './BookTable';
import MeditationTimer from './MeditationTimer';
import MirrorQuestion from './MirrorQuestion';
import MunajatTextarea from './MunajatTextarea';
import ExerciseBox from './ExerciseBox';
import OrnamentDivider from './OrnamentDivider';

export default function ProtocolH() {
  return (
    <div>
      <ProtocolHeader
        number="H"
        title="Protocole H : Solitude & Isolement"
        subtitle="Retrouver la Communauté du Cœur — Quand la Solitude Devient un Espace de Rencontre avec le Divin"
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
              'Isolement social prolongé — retrait des relations interpersonnelles pendant plusieurs mois',
              'Sentiment de déconnexion — impression de ne pas appartenir, d\'être invisible ou incompris',
              'Deuil de liens perdus — séparation, éloignement géographique, disparition d\'un cercle social',
              'Difficulté d\'attachement — peurs de l\'intimité, évitation des relations profondes',
              'Marginalisation — exclusion sociale, discrimination, sentiment de ne pas avoir sa place',
              'Dépression liée à l\'isolement — symptomatologie dépressive émergente ou aggravée par la solitude',
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
          <QuoteBlock cite="Objectif clinique du Protocole H">
            La solitude n&apos;est pas toujours une pathologie — dans la tradition
            spirituelle, elle peut devenir <em>Khalwa</em>, un espace sacré de
            rencontre avec le Divin. Mais lorsque l&apos;isolement devient souffrance,
            il révèle une soif de communion que le monde n&apos;a pas su apaiser.
            Ce protocole accompagne le patient à transformer son isolement
            d&apos;une expérience d&apos;abandon en un voyage vers la communauté
            du cœur — là où la Présence divine et les liens humains se rejoignent.
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
              ['Évaluation de l\'isolement', '1 sem.', '1', 'Hebdomadaire'],
              ['Fana Clinique', '5 min/séance', '2–3', 'Hebdomadaire'],
              ['Tajalli Clinique', '10 min/séance', '2–3', 'Hebdomadaire'],
              ['Munajat Clinique', '10 min/séance', '2–4', 'Hebdomadaire'],
              ['Béance Clinique', '10 min/séance', '2–3', 'Hebdomadaire'],
              ['Intégration', 'Variable', '1', 'Bimensuelle'],
              ['Total estimé', '', '8–14', ''],
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
            arabic="وَمَآ أَرۡسَلۡنَٰكَ إِلَّا رَحۡمَةٗ لِّلۡعَٰلَمِينَ"
            translation="Nous ne t'avons envoyé que comme miséricorde pour les mondes."
            reference="Al-Anbiya 21:107"
          />

          <ArabicVerse
            arabic="إِنَّمَا ٱلۡمُؤۡمِنُونَ إِخۡوَةٞ"
            translation="Les croyants ne sont que des frères."
            reference="Al-Hujurat 49:10"
          />

          <ArabicVerse
            arabic="وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ"
            translation="Et lorsque Mes serviteurs t'interrogent sur Moi, alors Je suis tout proche."
            reference="Al-Baqarah 2:186"
          />
        </section>

        <OrnamentDivider />

        {/* Solitude types table */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '0.75rem',
          }}>
            🌿 Types de Solitude et Leurs Miroirs
          </h3>
          <BookTable
            headers={['Type de Solitude', 'Miroir Spirituel', 'Pratique Compagnante', 'Verset Référent']}
            rows={[
              [
                'Solitude physique',
                'Jama\'a (Communauté)',
                'Retrouver la prière en groupe, les cercles de dhikr, les visites entre croyants',
                'Al-Baqarah 2:43',
              ],
              [
                'Solitude émotionnelle',
                'Rahma (Miséricorde)',
                'Pratiquer la compassion envers soi-même et les autres ; ouvrir son cœur à la tendresse divine',
                'Al-A\'raf 7:156',
              ],
              [
                'Solitude spirituelle',
                'Dhikr (Rappel de Dieu)',
                'Transformer la solitude en espace de dhikr — la Présence divine remplit le vide intérieur',
                'Ar-Ra\'d 13:28',
              ],
              [
                'Solitude existentielle',
                'Tawhid (Unité divine)',
                'Contempler que l\'Être humain n\'est jamais seul car il est relié à son Origine',
                'Al-Baqarah 2:186',
              ],
              [
                'Solitude choisie',
                'Khalwa (Retraite spirituelle)',
                'Honorer la solitude comme un chemin vers la rencontre sacrée avec soi-même et Dieu',
                'Al-Muzzammil 73:8',
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
              }}>L&apos;Espace entre les Deux Mondes — 5 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le patient qui souffre d&apos;isolement vit dans un espace entre deux
            mondes — celui qu&apos;il a perdu et celui qu&apos;il n&apos;arrive pas à
            atteindre. Ce vide n&apos;est pas vide en réalité : il est plein d&apos;une
            soif de connexion que le monde matériel n&apos;a pas su étancher.
            Cette phase enseigne au patient que ce vide est en réalité un
            <em> espace sacré</em> — un espace où Dieu attend d&apos;être découvert.
          </p>

          <ArabicVerse
            arabic="وَمَآ أَرۡسَلۡنَٰكَ إِلَّا رَحۡمَةٗ لِّلۡعَٰلَمِينَ"
            translation="Nous ne t'avons envoyé que comme miséricorde pour les mondes. C'est par la miséricorde de Dieu que vous êtes doux envers eux."
            reference="Al-Anbiya 21:107"
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
            }}>Technique : « La Tente de la Rencontre »</h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Asseyez-vous confortablement. Fermez les yeux. Prenez 3 respirations profondes — inspirez (4 sec), retenez (2 sec), expirez (6 sec).',
                'Imaginez que vous êtes dans un vaste désert. Autour de vous, le silence est total. Ce silence n\'est pas hostile — il est accueillant, comme le silence d\'une bibliothèque ou d\'une mosquée à l\'aube.',
                'Devant vous, une tente est dressée. Elle est faite d\'une lumière douce et dorée. Approchez-vous. Poussez le voile. À l\'intérieur, il fait chaud et paisible.',
                'Au centre de la tente, deux coussins sont placés l\'un en face de l\'autre. Asseyez-vous sur l\'un d\'eux. Sur l\'autre coussin, sentez une Présence — pas visible, mais palpable. C\'est la Présence de Celui qui dit : « Je suis plus proche de toi que ta veine jugulaire. »',
                'Restez en silence avec cette Présence. Vous n\'avez pas besoin de parler. La simple compagnie est suffisante. Vous n\'êtes pas seul(e). Vous n\'avez jamais été seul(e).',
                'Quand vous êtes prêt(e), remerciez cette Présence.ouvrez doucement les yeux en gardant avec vous cette sensation de compagnie sacrée.',
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

          <MeditationTimer id="protH-phase1" initialSeconds={300} label="Phase 1 — Fana Clinique" />
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
              }}>La Fraternité Invisible — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le Prophète ﷺ a dit : « Les croyants dans leur affection mutuelle,
            leur miséricorde et leur compassion sont comme un seul corps :
            si un membre souffre, le reste du corps répond par l&apos;insomnie
            et la fièvre. » Le patient isolé croit être déconnecté de l&apos;humanité,
            mais dans le miroir du Tajalli, il découvre une fraternité
            <em> invisible mais réelle</em> — celle de tous les cœurs qui, comme le sien,
            cherchent la connexion dans la Présence divine.
          </p>

          <ArabicVerse
            arabic="إِنَّمَا ٱلۡمُؤۡمِنُونَ إِخۡوَةٞ فَأَصۡلِحُواْ بَيۡنَ أَخَوَيۡكُمۡ"
            translation="Les croyants ne sont que des frères. Réconciliez donc vos frères."
            reference="Al-Hujurat 49:10"
          />

          <MirrorQuestion question="Si je n'étais vraiment jamais seul(e) — si chaque solitude était une porte vers une connexion invisible mais réelle — quelle porte est-ce que ma solitude actuelle essaie de m'ouvrir ?" />

          <MeditationTimer id="protH-phase2" initialSeconds={600} label="Phase 2 — Tajalli Clinique" />
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
              }}>Le Cri du Cœur Seul — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Dieu dit dans le Coran : « Et lorsque Mes serviteurs t&apos;interrogent
            sur Moi, alors Je suis tout proche. » (Al-Baqarah 2:186). La Munajat
            pour l&apos;isolement est le moment où le patient apprend que son cri
            n&apos;est jamais perdu dans le vide — il est toujours <em>entendu</em>.
            Même dans la solitude la plus profonde, la prière est une conversation
            à deux, et jamais à une seule voix.
          </p>

          <ArabicVerse
            arabic="وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعۡوَةَ ٱلدَّاعِ إِذَا دَعَانِ"
            translation="Et lorsque Mes serviteurs t'interrogent sur Moi, alors Je suis tout proche. Je réponds à l'appel de celui qui M'invoque quand il M'invoque."
            reference="Al-Baqarah 2:186"
          />

          <MunajatTextarea
            protocolName="Protocole H : Solitude & Isolement"
            phaseName="Phase 3 : Munajat Clinique"
            id="protH-munajat"
            prompts={[
              { emoji: '🙏', text: 'Seigneur, tu es plus proche de moi que ma jugulaire...' },
              { emoji: '🤲', text: 'Ma solitude me pousse à chercher...' },
              { emoji: '💫', text: 'Je trouve ta présence dans...' },
              { emoji: '🕊️', text: 'Je m\'ouvre à la connexion avec...' },
              { emoji: '🏠', text: 'Même seul(e), je suis accompagné(e) par...' },
            ]}
          />

          <MeditationTimer id="protH-phase3" initialSeconds={600} label="Phase 3 — Munajat Clinique" />
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
              }}>La Parole qui Réunit — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Dieu commande : « Et dis à Mes serviteurs de dire ce qu&apos;il y a
            de meilleur. » (Al-Isra 17:53). La guérison de l&apos;isolement passe
            par la parole — non pas n&apos;importe quelle parole, mais la parole
            <em> juste, douce et sincère</em> qui crée des ponts là où il n&apos;y avait
            que des murs. Cette phase invite le patient à devenir, à son tour,
            un lien de connexion pour les autres — car on guérit de la solitude
            en offrant à autrui ce que l&apos;on cherche soi-même.
          </p>

          <ArabicVerse
            arabic="وَقُل لِّعِبَادِي يَقُولُواْ ٱلَّتِي هِيَ أَحۡسَنُ"
            translation="Et dis à Mes serviteurs de dire ce qu'il y a de meilleur, car Satan sème la discorde parmi eux."
            reference="Al-Isra 17:53"
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
            }}>Exercice : « Le Pont des Mots »</h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.88rem',
              lineHeight: 1.75,
              color: '#E8E4DC',
            }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 1 :</strong> Pensez à
                une personne avec qui vous avez perdu contact — un ami, un membre
                de la famille, un voisin. Ne jugez pas la raison de l&apos;éloignement.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 2 :</strong> Rédigez mentalement
                un message simple et sincère — pas un plaidoyer, pas une explication.
                Juste un mot de bienveillance. Par exemple : « Je pensais à toi et je
                voulais que tu saches que tu comptes pour moi. »
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 3 :</strong> Si vous vous sentez
                prêt(e), envoyez ce message. Si ce n&apos;est pas le moment, écrivez-le
                dans votre journal. L&apos;intention seule est déjà un pont.
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
                « Les croyants sont comme un édifice : ils se soutiennent mutuellement
                comme les briques d&apos;un mur. »
                <br />
                <span style={{ fontSize: '0.85rem', color: '#9B9590' }}>— Hadith rapporté par Al-Bukhari et Muslim</span>
              </blockquote>
            </div>
          </div>

          <MeditationTimer id="protH-phase4" initialSeconds={600} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Quote Block */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Rumi — Masnavi">
            Tu as gardé la solitude, pensant qu&apos;elle te protégerait.
            Mais la vraie protection est dans les bras des autres.
            Ne crains pas le regard qui te juge — crains seulement
            le silence qui ne dit rien. Car chaque mot prononcé
            avec sincérité est une prière que Dieu exauce.
          </QuoteBlock>
        </section>

        <OrnamentDivider />

        {/* Post-session exercise */}
        <section style={{ marginBottom: '2rem' }}>
          <ExerciseBox label="Exercice Post-Séance — Les Semaines du Retour">
            <p style={{ margin: '0 0 0.75rem 0' }}>
              La guérison de l&apos;isolement est un retour progressif vers les autres.
              Ce programme de 3 semaines accompagne ce cheminement :
            </p>
            <ol style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <strong style={{ color: '#C9A227' }}>Semaine 1 — La Communauté Invisible (3 min/jour) :</strong>
                Chaque matin, nommez 3 personnes que vous aimez (passées ou présentes).
                Ressentez la chaleur de ces liens dans votre cœur. Même séparés
                par la distance ou le temps, ces liens existent encore dans le cœur.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Semaine 2 — Le Mot Juste :</strong>
                Envoyez un message de bienveillance à une personne par jour.
                Même court : « Comment vas-tu ? Je pensais à toi. » La guérison
                commence par un mot. Un seul mot suffit.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Semaine 3 — La Présence Réelle :</strong>
                Identifiez une activité communautaire accessible (prière en groupe,
                cours, bénévolat, cercle de lecture). Participez une fois. Même
                si c&apos;est difficile au début. Même si vous n&apos;y restez que 10 minutes.
                Le premier pas est toujours le plus difficile — mais il est aussi
                le plus important.
              </li>
            </ol>
            <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.85rem', color: '#9B9590', fontStyle: 'italic' }}>
              💡 Note au praticien : L&apos;isolement social sévère nécessite une évaluation
              attentive du risque suicidaire. Ce protocole est un complément spirituel
              et ne remplace pas un suivi psychiatrique et une thérapie relationnelle
              adaptée. Encouragez toute reconnexion progressive.
            </p>
          </ExerciseBox>
        </section>
      </ProtocolBody>
    </div>
  );
}
