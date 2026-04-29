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

export default function ProtocolC() {
  return (
    <div>
      <ProtocolHeader
        number="C"
        title="Protocole C : Dépression & Sécheresse Spirituelle"
        subtitle="L'Aube Après la Nuit Intérieure"
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
              'Dépression légère à modérée (sans risque suicidaire)',
              'Sécheresse spirituelle (Qabdh / قَبْض)',
              'Perte de sens et vide existentiel',
              'Épuisement émotionnel et burnout',
              'Apathie et anhédonie',
              'Troubles du sommeil liés à l\'humeur',
              'Dévalorisation de soi et sentiment d\'impuissance',
              'Dépression post-Ramadan ou post-retraite spirituelle',
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

        {/* Danger callout */}
        <section style={{ marginBottom: '2rem' }}>
          <Callout variant="danger" title="Contre-indication absolue — Orientation psychiatrique">
            <p style={{ margin: '0 0 0.5rem 0' }}>
              <strong>Dépression majeure avec caractéristiques sévères :</strong>
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>Idéation suicidaire active ou planifiée</li>
              <li>Épisode mélancolique avec symptômes psychotiques</li>
              <li>Incapacité fonctionnelle totale (alimentation, hygiène, mobilité)</li>
              <li>Dépression bipolaire en phase dépressive sévère</li>
            </ul>
            <p style={{ margin: '0.5rem 0 0 0', fontWeight: 600, color: '#DC2626' }}>
              → Orientation vers un psychiatre pour évaluation médicamentieuse.
              Le présent protocole ne remplace pas le suivi psychiatrique.
            </p>
          </Callout>
        </section>

        {/* Objective */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Objectif clinique du Protocole C">
            Accompagner le patient dans la traversée de la nuit intérieure
            sans chercher à l&apos;éclairer artificiellement. La dépression, comme la Qabdh
            spirituelle, est une nuit que l&apos;âme doit traverser avec patience et confiance.
            Ce protocole ne vise pas à « guérir » la dépression par la force de volonté,
            mais à enseigner au patient comment habiter cette nuit avec dignité,
            en attendant l&apos;aube que Dieu promet après chaque épreuve.
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
              ['Évaluation diagnostique', '1 sem.', '1–2', 'Hebdomadaire'],
              ['Fana Clinique', '5 min/séance', '2–3', 'Hebdomadaire'],
              ['Tajalli Clinique', '15 min/séance', '3–4', 'Hebdomadaire'],
              ['Munajat Clinique', '15 min/séance', '3–4', 'Hebdomadaire'],
              ['Béance Clinique', '10 min/séance', '2–3', 'Hebdomadaire'],
              ['Intégration', 'Variable', '1–2', 'Bimensuelle'],
              ['Total estimé', '', '10–14', ''],
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
            arabic="وَٱلضُّحَىٰ ﴿١﴾ وَٱلَّيۡلِ إِذَا سَجَىٰ ﴿٢﴾ مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ"
            translation="Par le jour montant ! Et par la nuit quand elle couvre tout ! Ton Seigneur ne t'a ni abandonné, ni détesté."
            reference="Ad-Duha 93:1-3"
          />

          <ArabicVerse
            arabic="أَلَمۡ نَشۡرَحۡ لَكَ صَدۡرَكَ ﴿١﴾ وَوَضَعۡنَا عَنكَ وِزۡرَكَ ﴿٢﴾ ٱلَّذِيۤ أَنقَضَ ظَهۡرَكَ"
            translation="N'avons-Nous pas ouvert pour toi ta poitrine ? Et ne t'avons-Nous pas déchargé de ton fardeau qui accablait ton dos ?"
            reference="Ash-Sharh 94:1-3"
          />

          <ArabicVerse
            arabic="فَإِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا ﴿٥﴾ إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا ﴿٦﴾ فَإِذَا فَرَغۡتَ فَٱنصَبۡ ﴿٧﴾ وَإِلَىٰ رَبِّكَ فَٱرۡغَب"
            translation="Certes, avec la difficulté vient la facilité. Certes, avec la difficulté vient la facilité. Quand tu as fini, redouble d'effort. Et c'est vers ton Seigneur que tend l'aspiration."
            reference="Ash-Sharh 94:5-8"
          />

          <ArabicVerse
            arabic="وَلَسَوۡفَ يُعۡطِيكَ رَبُّكَ فَتَرۡضَىٰٓ"
            translation="Et ton Seigneur te donnera, et tu seras satisfait."
            reference="Ad-Duha 93:5"
          />

          <ArabicVerse
            arabic="وَبَشِّرِ ٱلصَّٰبِرِينَ ﴿١٥٥﴾ ٱلَّذِينَ إِذَآ أَصَٰبَتۡهُم مُّصِيبَةٞ قَالُوٓاْ إِنَّا لِلَّهِ وَإِنَّآ إِلَيۡهِ رَٰجِعُونَ"
            translation="Et annonce la bonne nouvelle aux patients, qui disent, quand un malheur les atteint : « Certes nous sommes à Dieu, et c'est à Lui que nous retournerons. »"
            reference="Al-Baqarah 2:155-156"
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
                Phase 1 : Fana Clinique
              </h3>
              <p style={{
                fontSize: '0.82rem',
                color: '#9B9590',
                margin: 0,
                fontStyle: 'italic',
              }}>
                Le Désert de l&apos;Âme — 5 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le patient déprimé a souvent l&apos;impression que son âme est un désert
            vide — sans vie, sans couleur, sans goût. Cette phase n&apos;essaie pas
            de remplir ce désert artificiellement, mais lui apprend à s&apos;y asseoir
            en paix, car même dans le désert le plus aride, Dieu est présent
            et une source coule sous le sable. Ibn Arabî enseigne que la Qabdh
            (sécheresse spirituelle) est une étape nécessaire de la croissance
            de l&apos;âme.
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
              Technique : « Le Désert de l&apos;Âme » — Visualisation
            </h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Fermez les yeux. Respirez naturellement sans chercher à modifier votre respiration. Laissez votre corps exactement comme il est — fatigué, lourd, engourdi. Tout est acceptable.',
                'Imaginez que vous êtes dans un désert vaste et silencieux. Le sable est doré sous un ciel immense. Il fait chaud mais supportable. Vous êtes seul mais pas abandonné — c\'est un silence qui respire.',
                'Marchez lentement dans ce désert. Sous vos pieds, vous sentez que le sable est tiède. Au loin, vous apercevez une dune. Marchez vers elle sans vous presser. Il n\'y a nulle part où aller — le voyage est ici.',
                'Arrivé au sommet de la dune, vous découvrez de l\'autre côté une petite oasis — un point d\'eau claire, un palmier, une ombre douce. Asseyez-vous près de l\'eau. Regardez votre reflet.',
                'Dans ce reflet, vous ne voyez pas votre dépression. Vous voyez un être qui traverse le désert — fatigué, peut-être, mais vivant. Et quelque chose dans ce reflet vous murmure : « Même le désert fleurit quand vient la pluie. Ta saison de floraison viendra. »',
                'Restez assis dans cette oasis pendant le temps restant. Quand vous êtes prêt, ramenez doucement votre attention à la pièce, ouvrez les yeux.',
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

          <MeditationTimer id="protC-phase1" initialSeconds={300} label="Phase 1 — Fana Clinique" />
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
                Dépression vs. Qabdh — 15 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Une distinction clinique cruciale doit être faite entre la dépression
            clinique et la Qabdh (sécheresse spirituelle). Beaucoup de patients
            croyants confondent les deux, ce qui peut aggraver leur souffrance
            par des sentiments de culpabilité spirituelle. Le tableau suivant
            aide le praticien et le patient à clarifier cette distinction.
          </p>

          <BookTable
            headers={['Dimension', 'Dépression Clinique', 'Qabdh Spirituelle']}
            rows={[
              [
                'Humeur',
                'Tristesse persistante, vide affectif, anhédonie (perte de plaisir)',
                'Sécheresse dans la prière et les actes d\'adoration, mais capacité à ressentir du plaisir',
              ],
              [
                'Énergie',
                'Fatigue chronique, difficulté à accomplir les tâches quotidiennes',
                'Énergie relativement conservée pour les activités mondaines, difficulté spécifique dans les pratiques spirituelles',
              ],
              [
                'Sommeil',
                'Insomnie ou hypersomnie perturbante',
                'Sommeil généralement conservé, parfois plus profond',
              ],
              [
                'Estime de soi',
                'Dévalorisation massive, sentiment d\'inutilité, culpabilité envahissante',
                'Estime de soi relativement stable, culpabilité ciblée sur la vie spirituelle',
              ],
              [
                'Cognition',
                'Troubles de concentration, ralentissement psychomoteur, pensées suicidaires',
                'Concentration intacte, pensées orientées vers la recherche spirituelle',
              ],
              [
                'Durée',
                'Plus de 2 semaines, souvent des mois',
                'Variable, peut durer des semaines ou des mois, liée au cycle de croissance spirituelle',
              ],
              [
                'Approche',
                'Psychothérapie + éventuellement traitement médicamenteux',
                'Accompagnement spirituel, patience, persévérance dans la pratique malgré la sécheresse',
              ],
            ]}
          />

          <MirrorQuestion question="Dans mon désert intérieur, quelle part de ma souffrance est la voix de mon âme qui me parle (et demande à être entendue), et quelle part est le poids d'un fardeau qui n'est pas le mien à porter ?" />

          <MeditationTimer id="protC-phase2" initialSeconds={900} label="Phase 2 — Tajalli Clinique" />
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
                Le Dialogue dans la Nuit — 15 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le patient déprimé a souvent du mal à prier ou à s&apos;adresser à Dieu.
            Il peut ressentir de la colère, de l&apos;indifférence ou un silence du ciel.
            La Munajat dans le contexte de la dépression valide ces sentiments :
            il est permis d&apos;être en colère contre Dieu, de lui dire son silence,
            de lui confier sa détresse. Job (Ayyub) a gémi, Ya&apos;qub a pleuré
            jusqu&apos;à perdre la vue — et tous deux ont été aimés de Dieu.
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
              Exemple de dialogue — La Nuit de l&apos;Âme
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
                  ✦ Le cœur brisé parle :
                </p>
                <p style={{
                  fontSize: '0.88rem',
                  color: '#E8E4DC',
                  fontStyle: 'italic',
                  margin: '0.25rem 0 0 0',
                  lineHeight: 1.7,
                }}>
                  « Mon Dieu, tout est gris. Je me réveille le matin et je ne trouve
                  aucune raison de me lever. Mes prières sont vides, mes mots sont vides.
                  Je suis un coquillage vide sur une plage que personne ne visite.
                  Es-Tu encore là ? Parce que moi, je ne Te sens plus. »
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
                  « Tu me demandes si Je suis encore là ? Ton cœur bat — qui le fait battre ?
                  Ton souffle monte et descend — qui le fait monter ? La tristesse que tu ressens
                  est la preuve que ton cœur est vivant. Un cœur mort ne ressent rien.
                  Je suis plus proche de toi que tu ne le penses. La nuit que tu traverses
                  n&apos;est pas Ma colère — c&apos;est le creuset où ton âme se forge.
                  Patience. L&apos;aube vient. Elle vient toujours. »
                </p>
              </div>
            </div>
          </div>

          <MunajatTextarea
            protocolName="Protocole C : Dépression & Sécheresse Spirituelle"
            phaseName="Phase 3 : Munajat Clinique"
            id="protC-munajat"
            prompts={[
              { emoji: '🙏', text: 'Seigneur, dans cette sécheresse je cherche...' },
              { emoji: '💧', text: 'Mon âme a soif de...' },
              { emoji: '🌑', text: 'Même dans l\'obscurité je crois que...' },
              { emoji: '🌾', text: 'Je donne grâce pour...' },
              { emoji: '🌱', text: 'Ce désert porte en lui les graines de...' },
            ]}
          />

          <MeditationTimer id="protC-phase3" initialSeconds={900} label="Phase 3 — Munajat Clinique" />
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
                Normaliser la Nuit — 10 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Béance pour le patient déprimé consiste à accueillir la nuit
            sans la fuir et sans s&apos;y installer. C&apos;est une posture de <em>patience
            active</em> — Sabr — qui reconnaît que la nuit est temporaire
            tout en honorant la douleur qu&apos;elle porte. Le Prophète ﷺ a dit :
            « La chose la plus étonnante est la confiance du croyant :
            tout son bien est en lui et son espoir est en Dieu. »
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
              La Normalisation de la Qabdh — Enseignement spirituel
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.88rem',
              lineHeight: 1.75,
              color: '#E8E4DC',
            }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#D4AF37' }}>Al-Ghazali</strong> enseigne que la Qabdh est
                un signe de croissance spirituelle, pas de régression. L&apos;âme qui n&apos;éprouve
                jamais de sécheresse n&apos;a pas commencé le véritable voyage.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#D4AF37' }}>Ibn Ata&apos;illah</strong> écrit :
                « Ne contredis pas la Qabdh par des actes d&apos;obéissance extérieurs,
                car elle peut être une couverture qui te protège. »
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#D4AF37' }}>Ibn Arabî</strong> distingue la Qabdh divine
                (qui vient de Dieu comme épreuve de croissance) de la Qabdh égotique
                (qui vient de l&apos;ego par négligence). La première est un don déguisé ;
                la seconde appelle un changement de comportement.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#D4AF37' }}>Conseil pratique :</strong> Continuez
                vos pratiques même quand elles semblent vides. La fidélité à la pratique
                dans la sécheresse est plus précieuse que la ferveur dans l&apos;aisance.
                « Dieu ne regarde ni vos formes ni vos corps, mais Il regarde vos cœurs. »
              </p>
            </div>
          </div>

          <MeditationTimer id="protC-phase4" initialSeconds={600} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Post-session exercise */}
        <section style={{ marginBottom: '2rem' }}>
          <ExerciseBox label="Exercice Intégré — Le Journal des 21 Jours">
            <p style={{ margin: '0 0 0.75rem 0' }}>
              Pendant 21 jours consécutifs (la durée nécessaire pour initier
              un changement neurologique), tenez un journal structuré :
            </p>
            <ol style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <strong style={{ color: '#C9A227' }}>Matin (3 min) :</strong> Notez votre
                « score de nuit » de 1 à 10 (1 = nuit noire, 10 = aube claire).
                Pas besoin d&apos;améliorer — simplement observer.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Midi (2 min) :</strong> Identifiez
                un seul micro-moment de lumière — une tasse de thé chaude, un rayon
                de soleil, un sourire. Notez-le. La gratitude dans la nuit est un acte révolutionnaire.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Soir (5 min) :</strong> Munajat libre.
                Écrivez votre dialogue avec Dieu. Pas de censure. Pas de politesse
                artificielle. Soyez brutalement honnête — c&apos;est dans la vérité
                du cœur que la guérison commence.
              </li>
            </ol>
            <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.85rem', color: '#9B9590', fontStyle: 'italic' }}>
              💡 Conseil au praticien : Relisez les journaux avec le patient toutes les 2 semaines.
              Les micro-changements sont invisibles au quotidien mais évidents sur le papier :
              augmentation graduelle du score de nuit, apparition de micro-moments de lumière,
              évolution du ton de la Munajat. Célébrez chaque progrès, même infime.
            </p>
          </ExerciseBox>
        </section>
      </ProtocolBody>
    </div>
  );
}
