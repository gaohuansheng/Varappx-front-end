'use strict';
var DESC = require('../../../../resources/descriptions');

var descriptions = {
    'variant_columns': DESC,
    'filters': {
        'quality': DESC.quality,
        'pass_filter': DESC.pass_filter,
        'qual_depth': DESC.qual_depth,
        'fisher_strand_bias': DESC.fisher_strand_bias + ' The higher value, the more likely there is to be bias.',
        'rms_map_qual': DESC.rms_map_qual,
        //'impact': 'Location of the mutation inside a gene, characterizing the impact on the protein.',
        //'impact_severity': 'Severity of the impact of the mutation on the protein.',
        'sift_pred': DESC.sift_pred,
        'polyphen_pred': DESC.polyphen_pred,
        'sift_score': DESC.sift_pred + ' The lower, the more deleterious.',
        'polyphen_score': DESC.polyphen_pred + ' The higher, the more deleterious.',
        'gerp_bp_score': DESC.gerp_bp_score + ' Higher scores reflect greater conservation.',
        'gerp_element_pval': DESC.gerp_element_pval + ' Lower P-values scores reflect greater conservation.',
        'cadd_raw': DESC.cadd_raw + ' Indels have no score and will not be filtered out.',
        'cadd_scaled': DESC.cadd_scaled + ' Indels have no score and will not be filtered out.',
        //'in_dbsnp': 'The mutation is present in the dbSNP database.',
        //'in_1kg': 'The mutation is present in the 1000 genomes database.',
        //'in_exac': 'The mutation is present in the EXAC database.',
        //'in_esp': 'The mutation is present in the ESP database.',
        'is_coding': 'Does the variant fall in a coding region for at least 1 transcript?',
        'is_exonic': 'Does the variant fall in an exonic region for at least 1 transcript?',
        'aaf_1kg_all': DESC.aaf_1kg_all,
        'aaf_esp_all': DESC.aaf_esp_all,
        'aaf_exac_all': DESC.aaf_exac_all,
        'aaf_max_all': DESC.aaf_max_all,
        'base_qual_rank_sum': DESC.base_qual_rank_sum +
            ' Near 0 is better (means "no difference").',
        'map_qual_rank_sum': DESC.map_qual_rank_sum +
            ' Near 0 is better (means "no difference").',
        'read_pos_rank_sum': DESC.read_pos_rank_sum +
            ' Near 0 is better (means "no difference").',
        'strand_bias_odds_ratio': DESC.strand_bias_odds_ratio + ' A high value is indicative of large bias.',
    },
    'FiltersPanel': {
        'none': "All variants without any filtration.",
        'Default1_Final': "Final variants in our filtration.",
        'Default1b_Final': "Final variants in our filtration, because it is in splicing region.",
        'Default2_Important': "Important variants in our filtration ",
        'Default3_Pathogenic': "Variants have pathogenic data.",
    },
    'impact_severity': {
        'HIGH': 'HIGH impact: assumed to have a disruptive impact in the protein, ' +
            'probably causing protein truncation, loss of function, or triggering nonsense mediated decay.',
        'MED': 'MEDIUM impact: non-disruptive variant that might change the protein effectiveness.',
        'LOW': 'LOW impact: assumed to be mostly harmless or unlikely to change protein behavior.',
    },
};

module.exports = descriptions;
