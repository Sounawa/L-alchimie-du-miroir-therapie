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

export default function ProtocolG() {
  return (
    <div>
      <ProtocolHeader
        number="G"
        title="Protocole G : Peur & Phobies"
        subtitle="Libérer l'Être de ses Chaînes Invisibles — Quand la Crainte Devient un Miroir de la Foi"
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
              'Agoraphobie — peur des espaces ouverts, des foules et des situations d\'impasse',
              'Phobie sociale — anxiété invalidante face au regard et au jugement d\'autrui',
              'Trouble panique — attaques de panique récurrentes avec anticipation anxieuse',
              'Phobies spécifiques — peur intense et irrationnelle d\'objets, d\'animaux ou de situations',
              'Trouble anxieux généralisé avec composante phobique',
              'TOC avec rituels de vérification — when fear drives compulsive behaviors',
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
          <QuoteBlock cite="Objectif clinique du Protocole G">
            La peur, dans la tradition islamique, n&apos;est pas un défaut spirituel —
            c&apos;est un signal de l&apos;âme qui appelle à la confiance. Le Prophète ﷺ
            a dit : « Sois dans ce monde comme un étranger ou un voyageur. »
            Ce protocole ne vise pas à supprimer la peur, mais à la transformer
            en un <em>miroir de la foi</em> : quand le patient apprend à se tourner
            vers Dieu au cœur de l&apos;angoisse, la peur devient le véhicule
            d&apos;une confiance plus profonde — le Tawakkul.
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
              ['Évaluation de la peur', '1 sem.', '1', 'Hebdomadaire'],
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
            arabic="لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡ"
            translation="Dieu n'impose à aucune âme une charge supérieure à sa capacité."
            reference="Al-Baqarah 2:286"
          />

          <ArabicVerse
            arabic="وَٱلَّذِينَ جَٰهَدُواْ فِينَا لَنَهۡدِيَنَّهُمۡ سُبُلَنَا"
            translation="Et ceux qui luttent pour Notre cause, Nous les guiderons certes sur Nos sentiers."
            reference="Al-Ankabut 29:69"
          />

          <ArabicVerse
            arabic="عَلَى ٱللَّهِ تَوَكَّلۡتُ رَبِّي وَرَبُّكُم"
            translation="Je m'en remets à Allah, mon Seigneur et le vôtre."
            reference="Ghafir 40:44"
          />
        </section>

        <OrnamentDivider />

        {/* Fear spectrum table */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '0.75rem',
          }}>
            🔮 Spectre de la Peur
          </h3>
          <BookTable
            headers={['Type de Peur', 'Miroir Spirituel', 'Verset Référent', 'Adaptation du Protocole']}
            rows={[
              [
                'Peur de l\'inconnu',
                'Tawakkul (Confiance en Dieu)',
                'Al-Baqarah 2:216',
                'Phase 1 prolongée — ancrage dans la Présence divine comme refuge face à l\'incertitude',
              ],
              [
                'Peur de la mort',
                'Yaqin (Certitude de la foi)',
                'Al-Imran 3:185',
                'Phase 2 approfondie — contemplation de la vie éternelle et de la Miséricorde divine',
              ],
              [
                'Peur du jugement',
                'Husn al-Zann (Bon présage)',
                'Al-Hujurat 49:12',
                'Phase 3 centrée — dialogue avec Dieu sur la valeur intrinsèque de l\'être',
              ],
              [
                'Peur de l\'échec',
                'Tawfiq (Succès divin)',
                'Al-Imran 3:139',
                'Phase 4 intégrative — transformation de l\'échec en épreuve de croissance spirituelle',
              ],
              [
                'Peur de la perte',
                'Shukr (Gratitude)',
                'Ibrahim 14:7',
                'Technique de gratitude sacramentelle à chaque phase — se recentrer sur les dons présents',
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
              }}>Le Dissolution de l&apos;Épouvante — 5 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La peur phobique est une expérience de dissolution : le monde autour
            du patient se réduit à un point de terreur. Le cœur s&apos;accélère,
            la respiration se raccourcit, la pensée se fige. Cette phase
            enseigne au patient que cette dissolution peut être <em>retournée</em> :
            au lieu de se dissoudre dans la peur, il apprend à se dissoudre
            dans la Présence divine — là où rien ne peut l&apos;atteindre.
          </p>

          <ArabicVerse
            arabic="لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡ"
            translation="Dieu n'impose à aucune âme une charge supérieure à sa capacité. À chacun ce qu'il a acquis."
            reference="Al-Baqarah 2:286"
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
            }}>Technique : « La Forteresse de Lumière »</h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Asseyez-vous confortablement, les pieds posés à plat. Fermez les yeux. Prenez 3 respirations profondes — inspirez par le nez (4 sec), retenez (2 sec), expirez par la bouche (6 sec).',
                'Identifiez la peur que vous portez en ce moment. Où se loge-t-elle dans votre corps ? Poitrine, gorge, ventre ? Ne la combattez pas — observez-la comme un visiteur inattendu.',
                'Dites intérieurement : « Ô Allah, Tu ne m\'as pas chargé au-delà de mes forces. Cette peur est une épreuve, pas une sentence. »',
                'Visualisez une lumière dorée qui émane de votre cœur et forme une forteresse circulaire autour de vous. Cette lumière est le Tawakkul — la confiance absolue en Celui qui ne dort jamais.',
                'Imaginez la peur comme un oiseau qui vole autour de la forteresse. Elle est là, elle existe, mais elle ne peut pas entrer. Vous êtes protégé(e).',
                'Restez dans cette forteresse de lumière. Respirez lentement. Répétez : « Hasbunallahu wa ni\'mal wakil — Allah me suffit et Il est le meilleur Garant. »',
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

          <MeditationTimer id="protG-phase1" initialSeconds={300} label="Phase 1 — Fana Clinique" />
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
              }}>Le Miroir du Courage Intérieur — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le courage n&apos;est pas l&apos;absence de peur — c&apos;est la décision
            d&apos;avancer malgré elle. Dans la tradition soufie, le courage spirituel
            (shaja&apos;a) naît non pas de la force humaine, mais de la certitude
            que Dieu est plus grand que toute épreuve. Cette phase invite le patient
            à contempler sa peur dans le miroir divin et à y découvrir une
            vérité inattendue : la peur est elle-même un <em>appel à Dieu</em>.
          </p>

          <ArabicVerse
            arabic="وَٱلَّذِينَ جَٰهَدُواْ فِينَا لَنَهۡدِيَنَّهُمۡ سُبُلَنَاۚ وَإِنَّ ٱللَّهَ لَمَعَ ٱلۡمُحۡسِنِينَ"
            translation="Et ceux qui luttent pour Notre cause, Nous les guiderons certes sur Nos sentiers. Allah est assurément avec les bienfaisants."
            reference="Al-Ankabut 29:69"
          />

          <MirrorQuestion question="Si ma peur était un messager de Dieu, quel message m'apporterait-elle ? Quelle vérité essaie-t-elle de me faire entendre que je refuse d'écouter ?" />

          <MeditationTimer id="protG-phase2" initialSeconds={600} label="Phase 2 — Tajalli Clinique" />
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
              }}>Le Dialogue de la Confiance — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Le Prophète Moussa (Moïse) ﷺ a dit, face à la mer Rouge et à l&apos;armée
            de Pharaon : « Non ! Mon Seigneur est avec moi et Il me guidera. »
            (Ghafir 40:44). La Munajat pour la peur est un dialogue de <em>remise</em> :
            le patient ne demande pas que la peur disparaisse — il demande que
            la confiance soit plus grande que la peur.
          </p>

          <ArabicVerse
            arabic="عَلَى ٱللَّهِ تَوَكَّلۡتُ رَبِّي وَرَبُّكُم"
            translation="Je m'en remets à Allah, mon Seigneur et le vôtre. Il n'est de divinité que Lui, le Seigneur du Trône immense."
            reference="Ghafir 40:44"
          />

          <MunajatTextarea
            protocolName="Protocole G : Peur & Phobies"
            phaseName="Phase 3 : Munajat Clinique"
            id="protG-munajat"
            prompts={[
              { emoji: '🙏', text: 'Seigneur, tu es mon protecteur...' },
              { emoji: '🛡️', text: 'Ma peur me révèle mon besoin de...' },
              { emoji: '🕊️', text: 'Je place ma confiance en toi car...' },
              { emoji: '💪', text: 'Avec toi je peux affronter...' },
              { emoji: '🌿', text: 'Je lâche prise sur le besoin de contrôler car...' },
            ]}
          />

          <MeditationTimer id="protG-phase3" initialSeconds={600} label="Phase 3 — Munajat Clinique" />
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
              }}>L&apos;Apaisement dans le Dhikr — 10 minutes</p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Béance est le moment où le cœur s&apos;ouvre à la paix qui surpasse
            toute compréhension. Le Coran dit : « N&apos;est-ce pas par le rappel
            de Dieu que les cœurs s&apos;apaisent ? » (Ar-Ra&apos;d 13:28). Cette phase
            n&apos;est pas la fin de la peur — c&apos;est l&apos;installation dans un espace
            où la peur n&apos;a plus d&apos;emprise. Le patient apprend que la sérénité
            n&apos;est pas l&apos;absence de tempêtes, mais la présence de Dieu au
            milieu d&apos;elles.
          </p>

          <ArabicVerse
            arabic="أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَئِنُّ ٱلۡقُلُوبُ"
            translation="N'est-ce pas par le rappel de Dieu que les cœurs s'apaisent ?"
            reference="Ar-Ra'd 13:28"
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
            }}>Exercice : « Le Dhikr de la Sérénité »</h4>
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
                dans votre forteresse de lumière (de la Phase 1). Prenez 3 respirations
                profondes. Laissez la tension quitter votre corps — relâchez les épaules,
                les mâchoires, les poings.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 2 :</strong> Commencez à
                répéter lentement : « La hawla wa la quwwata illa billah — Il n&apos;y a
                de force ni de puissance qu&apos;en Allah. » Répétez-le 33 fois en
                touchant chaque phalange de vos doigts.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#2E8B57' }}>Étape 3 :</strong> Puis répétez :
                « Hasbunallahu wa ni&apos;mal wakil — Allah me suffit et Il est
                le meilleur Garant » — 33 fois. À chaque répétition, sentez une
                vague de calme descendre dans votre corps.
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
                « La hawla wa la quwwata illa billah — Il n&apos;y a de force ni
                de puissance qu&apos;en Dieu. C&apos;est un trésor du Paradis. »
                <br />
                <span style={{ fontSize: '0.85rem', color: '#9B9590' }}>— Hadith rapporté par Al-Bukhari et Muslim</span>
              </blockquote>
            </div>
          </div>

          <MeditationTimer id="protG-phase4" initialSeconds={600} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Quote Block */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Ibn Qayyim al-Jawziyya — Madarij al-Salikin">
            Le cœur qui connaît son Seigneur ne tremble pas devant les créatures.
            Car celui qui contemple la Grandeur de Dieu, toutes les autres
            grandeurs s&apos;effacent. Et celui qui goûte à la douceur de la
            confiance en Dieu, la peur du monde perd son pouvoir.
          </QuoteBlock>
        </section>

        <OrnamentDivider />

        {/* Post-session exercise */}
        <section style={{ marginBottom: '2rem' }}>
          <ExerciseBox label="Exercice Post-Séance — Le Journal du Courage">
            <p style={{ margin: '0 0 0.75rem 0' }}>
              Chaque jour pendant 21 jours, pratiquez cet exercice progressif
              pour transformer votre relation à la peur :
            </p>
            <ol style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <li>
                <strong style={{ color: '#C9A227' }}>Matin (3 min) :</strong>
                Identifiez une peur présente en vous. Nommez-la précisément.
                Puis dites : « Cette peur est réelle, mais Allah est plus réel encore.
                Je me confie à Lui. » Respirez dans cette confiance.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Dans la journée :</strong>
                Chaque fois que la peur se manifeste, ne la fuyez pas. Observez-la
                30 secondes. Puis répétez : « La hawla wa la quwwata illa billah. »
                Notez ce qui se passe dans votre corps.
              </li>
              <li>
                <strong style={{ color: '#C9A227' }}>Le soir (5 min) :</strong>
                Dans votre journal, écrivez : « Aujourd&apos;hui, j&apos;ai eu peur de...
                Mais j&apos;ai appris que... » Complétez la phrase avec une vérité
                spirituelle que la peur vous a révélée.
              </li>
            </ol>
            <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.85rem', color: '#9B9590', fontStyle: 'italic' }}>
              💡 Note au praticien : La peur phobique nécessite une approche graduée.
              Ne jamais forcer l&apos;exposition. Le protocole doit toujours être
              couplé à une thérapie cognitivo-comportementale pour une efficacité optimale.
            </p>
          </ExerciseBox>
        </section>
      </ProtocolBody>
    </div>
  );
}
