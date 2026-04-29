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

export default function ProtocolA() {
  return (
    <div>
      <ProtocolHeader
        number="A"
        title="Protocole A : Trauma / PTSD"
        subtitle="Le Refuge Sécurisant — Pour les Survivants"
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
              'État de Stress Post-Traumatique (ESPT/PTSD)',
              'Traumas de l\'enfance — abus physiques, émotionnels, sexuels',
              'Traumas relationnels — violence conjugale, narcissique',
              'Deuil traumatique — perte soudaine, non élaborée',
              'Troubles dissociatifs légers à modérés',
              'Symptômes d\'intrusion, d\'évitement et d\'hyperactivation',
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

        {/* Contre-indications */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#DC2626',
            marginBottom: '0.75rem',
          }}>
            ⛔ Contre-indications
          </h3>
          <Callout variant="danger" title="Attention — Préalable indispensable">
            <ul style={{ margin: '0', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>Psychose active ou trouble bipolaire en phase maniaque</li>
              <li>Idéation suicidaire active — orientation psychiatrique immédiate</li>
              <li>Trauma aigu récent (moins de 3 mois) — stabilisation d&apos;abord</li>
              <li>Dissociation sévère non stabilisée</li>
              <li>Patient non自愿 ou sous contrainte</li>
            </ul>
          </Callout>
        </section>

        {/* Objective */}
        <section style={{ marginBottom: '2rem' }}>
          <QuoteBlock cite="Objectif clinique du Protocole A">
            Rétablir un sentiment fondamental de sécurité intérieure par l&apos;ancrage
            dans la Présence divine, permettant au survivant de revisiter le trauma
            dans un espace de protection sacrée. Le protocole vise la digestion
            progressive du souvenir traumatique par les quatre phases de la méditation
            thérapeutique islamique, tout en honorant la résilience du patient.
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
              ['Phase d\'évaluation', '1–2 sem.', '1–2', 'Hebdomadaire'],
              ['Fana Clinique', '10 min/séance', '3–4', 'Hebdomadaire'],
              ['Tajalli Clinique', '15 min/séance', '4–5', 'Hebdomadaire'],
              ['Munajat Clinique', '15 min/séance', '3–4', 'Hebdomadaire'],
              ['Béance Clinique', '10 min/séance', '2–3', 'Hebdomadaire'],
              ['Intégration', 'Variable', '1–2', 'Bimensuelle'],
              ['Total estimé', '', '12–16', ''],
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
            translation="Dieu n'impose à aucune âme une charge supérieure à sa capacité. Elle sera rétribuée pour le bien qu'elle aura accompli et punie pour le mal qu'elle aura commis."
            reference="Al-Baqarah 2:286"
          />

          <ArabicVerse
            arabic="ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ﴿٢﴾ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ﴿٣﴾ مَٰلِكِ يَوۡمِ ٱلدِّينِ"
            translation="Louange à Dieu, Seigneur des mondes. Le Tout-Miséricordieux, le Très-Miséricordieux. Maître du Jour de la Rétribution."
            reference="Al-Fatiha 1:1-3"
          />

          <ArabicVerse
            arabic="أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَئِنُّ ٱلۡقُلُوبُ"
            translation="N'est-ce pas par le rappel de Dieu que les cœurs s'apaisent ?"
            reference="Ar-Ra'd 13:28"
          />

          <ArabicVerse
            arabic="وَنَحۡنُ أَقۡرَبُ إِلَيۡهِ مِنۡ حَبۡلِ ٱلۡوَرِيدِ"
            translation="Nous sommes plus proches de lui que sa veine jugulaire."
            reference="Qaf 50:16"
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
                Le Refuge Sécurisant — 10 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Cette première phase est le fondement du protocole traumatique. Elle vise
            à installer un sentiment de sécurité profonde avant toute exploration.
            Le survivant apprend à se réfugier dans la Présence divine comme un
            enfant se blottit dans les bras protecteurs d&apos;un parent aimant.
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
              Technique : « Le Refuge Sécurisant »
            </h4>
            <ol style={{
              margin: 0,
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
            }}>
              {[
                'Asseyez-vous confortablement, les pieds posés à plat au sol. Fermez doucement les yeux. Prenez trois respirations profondes — inspirez par le nez (4 secondes), retenez (2 secondes), expirez par la bouche (6 secondes).',
                'Ressentez les points de contact de votre corps avec la chaise et le sol. Vous êtes ici, dans le présent, en sécurité.',
                'Répétez intérieurement : « Je me réfugie auprès de Dieu contre le mal de ce que je ressens. » Visualisez une lumière dorée et chaude qui vous enveloppe comme un manteau protecteur.',
                'Laissez cette lumière se densifier autour de vous. Elle est impénétrable. Rien ne peut vous atteindre dans cet espace sacré. Vous êtes sous la protection du Très-Miséricordieux.',
                'Quand une pensée ou un souvenir envahissant apparaît, ne luttez pas. Accueillez-le comme un nuage passant dans un ciel infini. Observez-le sans vous y identifier, puis retournez à votre refuge lumineux.',
                'Restez dans cet état de refuge pendant les minutes restantes. Quand vous êtes prêt, prenez une profonde inspiration et ouvrez doucement les yeux en ramenant avec vous ce sentiment de sécurité.',
              ].map((step, i) => (
                <li key={i} style={{
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: '#E8E4DC',
                  paddingLeft: '0.25rem',
                }}>
                  <span style={{
                    color: '#C9A227',
                    fontWeight: 700,
                    marginRight: '0.25rem',
                  }}>
                    {i + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <MeditationTimer id="protA-phase1" initialSeconds={600} label="Phase 1 — Fana Clinique" />
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
                L&apos;Illumination du Miroir — 15 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            Après avoir établi la sécurité dans la phase de Fana, le patient est
            invité à contempler ce que le miroir de son âme révèle. Il ne s&apos;agit
            pas de revisiter le trauma directement, mais d&apos;observer les émotions
            et sensations qui émergent avec la distance que procure le refuge divin.
          </p>

          <MirrorQuestion question="Quand je me sens le plus en sécurité, quel visage mon âme me montre-t-elle ? Est-ce le visage d'un enfant, d'un guerrier, d'un sage ? Que dit ce visage de ce dont mon cœur a le plus besoin en ce moment ?" />

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
                '« Je vois un enfant qui se cache derrière un pilier, il a peur mais il me regarde avec curiosité. »',
                '« Mon âme me montre un arbre ancien dont les racines sont profondes — il a traversé des tempêtes mais il tient toujours. »',
                '« Je ressens une main chaude sur mon épaule, comme si quelqu\'un me disait : « Tu es en sécurité maintenant. »',
                '« C\'est un paysage vaste et ouvert avec une lumière douce — il n\'y a rien qui puisse me faire du mal ici. »',
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

          <MeditationTimer id="protA-phase2" initialSeconds={900} label="Phase 2 — Tajalli Clinique" />
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
                Le Dialogue Intime avec le Divin — 15 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Munajat est le dialogue secret de l&apos;âme avec son Créateur.
            Pour le survivant de trauma, c&apos;est un espace où il peut exprimer
            ce qu&apos;il n&apos;a jamais pu dire — la douleur, la colère contre Dieu,
            les questions sans réponse — tout en sachant qu&apos;il est entendu
            sans jugement. Cette phase libère la parole ensablée du trauma.
          </p>

          <p style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#C9A227',
            marginBottom: '0.5rem',
          }}>
            Prompts pour le dialogue :
          </p>

          <PromptChips prompts={[
            { emoji: '🙏', text: 'Ô Dieu, je souffrais et Tu n\'étais pas là...' },
            { emoji: '💫', text: 'Seigneur, montre-moi le sens caché de cette épreuve' },
            { emoji: '🤲', text: 'Mon Dieu, donne-moi la force de pardonner' },
            { emoji: '🕊️', text: 'Seigneur, je veux me libérer de cette peur' },
            { emoji: '💎', text: 'Ô Toi qui guéris les cœurs brisés, guéris le mien' },
            { emoji: '🌅', text: 'Mon âme cherche la paix que rien ne peut troubler' },
          ]} />

          <div style={{
            marginTop: '1rem',
          }}>
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
              placeholder="Écrivez librement ce que votre cœur dit à Dieu dans cet espace de sécurité..."
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

          <MeditationTimer id="protA-phase3" initialSeconds={900} label="Phase 3 — Munajat Clinique" />
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
                L&apos;Ouverture à l&apos;Accueil — 10 minutes
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '0.92rem',
            lineHeight: 1.8,
            color: '#E8E4DC',
            marginBottom: '1rem',
          }}>
            La Béance est le moment où le cœur s&apos;ouvre à l&apos;acceptation radicale.
            Après avoir exploré la douleur (Tajalli) et dialogué avec le Divin (Munajat),
            le survivant est invité à relâcher toute résistance et à accueillir
            ce qui est, dans une posture de confiance en la sagesse divine.
            Ce n&apos;est pas une résignation mais une libération.
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
              Exercice d&apos;Acceptation Radicale
            </h4>
            <p style={{
              fontSize: '0.88rem',
              lineHeight: 1.75,
              color: '#E8E4DC',
              margin: 0,
            }}>
              Asseyez-vous dans votre refuge sécurisant. Prenez une inspiration profonde.
              Imaginez que tout ce que vous portez — les souvenirs douloureux,
              la peur, la tension — se transforme en feuilles mortes
              tombant doucement d&apos;un arbre. Regardez-les tomber sans essayer
              de les retenir. Elles sont parties, elles font partie du sol
              fertile de votre histoire. Et de ce sol, quelque chose de nouveau
              peut pousser. Répétez intérieurement :
            </p>
            <blockquote style={{
              margin: '1rem 0 0 0',
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
              « Hasbunallahu wa ni&apos;mal wakil — Dieu nous suffit, et quel excellent protecteur ! »
            </blockquote>
          </div>

          <MeditationTimer id="protA-phase4" initialSeconds={600} label="Phase 4 — Béance Clinique" />
        </section>

        <OrnamentDivider />

        {/* Integration table */}
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: '"Amiri", serif',
            fontSize: '1.15rem',
            color: '#D4AF37',
            marginBottom: '0.75rem',
          }}>
            🔗 Intégration avec les Approches Thérapeutiques
          </h3>
          <BookTable
            headers={['Approche', 'Convergence', 'Complémentarité']}
            rows={[
              [
                'EMDR',
                'Désensibilisation progressive des souvenirs traumatiques',
                'Le Fana fournit la ressource de sécurité ; la Munajat facilite la retraitement cognitif par le dialogue sacré',
              ],
              [
                'TCC',
                'Restructuration cognitive et exposition graduée',
                'Le Tajalli permet l\'observation des pensées intrusives sans fusion cognitive, renforcée par la dimension spirituelle',
              ],
              [
                'Somatic Experiencing (SE)',
                'Régulation du système nerveux et libération de l\'énergie traumatique',
                'Les techniques de respiration et l\'ancrage dans le refuge créent un contenant somatique sécurisant',
              ],
              [
                'Psychanalyse',
                'Exploration de l\'inconscient et élaboration du traumatisme',
                'La Munajat offre un espace transférentiel avec le Divin qui dépasse la relation thérapeutique classique',
              ],
            ]}
          />
        </section>

        {/* Post-session exercise */}
        <section style={{ marginBottom: '2rem' }}>
          <ExerciseBox label="Exercice Post-Séance — Le Journal du Refuge">
            <p style={{ margin: '0 0 0.75rem 0' }}>
              Pendant les 7 jours suivant la séance, tenez un journal structuré
              avec les entrées suivantes :
            </p>
            <ol style={{
              margin: 0,
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}>
              <li><strong style={{ color: '#C9A227' }}>Matin (5 min) :</strong> « Aujourd&apos;hui, mon refuge est... » — Décrivez votre lieu de sécurité intérieure.</li>
              <li><strong style={{ color: '#C9A227' }}>Soir (5 min) :</strong> « Ce que mon âme m&apos;a révélé aujourd&apos;hui... » — Notez les émotions, images ou intuitions.</li>
              <li><strong style={{ color: '#C9A227' }}>Munajat libre :</strong> Écrivez un court dialogue avec Dieu sur ce que vous avez vécu.</li>
            </ol>
            <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.85rem', color: '#9B9590', fontStyle: 'italic' }}>
              💡 Conseil : Gardez ce journal dans un endroit sûr. Il contient les matériaux
              précieux de votre guérison. Relisez-le après 4 semaines pour observer
              les transformations subtiles de votre relation au trauma.
            </p>
          </ExerciseBox>
        </section>
      </ProtocolBody>
    </div>
  );
}
